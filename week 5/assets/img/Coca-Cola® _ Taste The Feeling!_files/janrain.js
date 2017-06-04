function configureMarketingServices(_, janrain) {
    'use strict';

    var endpointURL = null;
    var endpointElement = document.getElementById('serviceEndpoint'),
        security = location.protocol === 'https:';
    if (endpointElement) {
        endpointURL = endpointElement.value;
    }
    endpointElement = null;

    $(document).ajaxSend(function (event, xhr, settings) {

        var access_token = BrandsCom.CookieManager.getItem('ko_access_token');
        var access_token_win = window.sessionStorage.getItem('ko_access_token');

        console.log('invoking ajax send ' + access_token);
        if (settings.url.indexOf(endpointURL) !== -1 && access_token) {
            xhr.setRequestHeader('x-access-token', access_token);
        } else {
            xhr.setRequestHeader('x-access-token', access_token_win);
        }
        console.log('ko access token: ' + access_token);
    });

    /*
     Add a handler to all Capture events with each event handler explicitly defined
     so that we, or the customer, can add code to any event handler.
    */
    var eventPayloads = {};
    var coolFields = ['oneTime',
            'userData',
            'keepMeLoggedIn',
            'accessToken',
            'sso',
            'ssoCode',
            'ssoImplicitLogin',
            'transactionId',
            'status',
            'statusMessage',
            'action',
            'version',
            'screen',
            'authProvider',
            'authProfileData',
            'renders',
            'defaultScreen',
            'name',
            'provider',
            'token',
            'capture_transactionId',
            'uuid',
            'email',
            'displayName',
            'returnProvider',
            'welcomeName',
            'type',
            'providersPerPage',
            'providers'];

    function genericHandler(eventName) {

        return function (result) {

            var resultIsObject = _.isObject(result);
            var resultIsArray = _.isArray(result);

            console.log('janrain: ' + eventName, result);

            eventPayloads[eventName] = result;
            if (resultIsObject && !resultIsArray) {
                eventPayloads[eventName] = _.pick(result, coolFields);
            }
        };
    }

    function onCaptureLoginSuccess(result) {

        console.log('handling onCaptureLoginSuccess', eventPayloads);
        var data = eventPayloads.onCaptureLoginSuccess;
        /* in cases where there are opts changes, the action would be postLoginConfirmation and
            we lose context about whether this was social/traditional.  in this case, we can pick
            it up from a separate event */
        if (_.isString(data.action) && !data.action.match(/traditionalSignin|socialSignin/)) {
            data.action = 'traditionalSignIn';
            if (_.has(eventPayloads, 'onCapturePostLoginScreen')) {
                data.action = 'socialSignIn';
                data.provider = eventPayloads.onCapturePostLoginScreen.provider;
            }
            data.source = window.sessionStorage.getItem('leadURL');
        }

        data.referrer = document.referrer;
        BrandsCom.CookieManager.setItem('updateUUID', true, Number.POSITIVE_INFINITY,  "/", document.domain, security);

        $.ajax({
            type: 'POST',
            url: endpointURL + '/api/auth',
            data: data,
            success: function (data) {
                console.log('login returned the following ', data);
            },
            failure: function (data) {
                console.log(data);
                console.log('Error while authenticating. ' + data);
            }
        });
    }

    function onCaptureRegistrationSuccess(result) {
        var data = eventPayloads.onCaptureRegistrationSuccess;
        /* in cases where there are opts changes, the action would be postLoginConfirmation and
            we lose context about whether this was social/traditional.  in this case, we can pick
            it up from a separate event */
        if (_.isString(data.action) && !data.action.match(/traditionalRegister|socialRegister/)) {
            data.action = 'traditionalRegister';
            if (_.has(eventPayloads, 'onProviderLoginToken')) {
                data.action = 'socialRegister';
                data.provider = eventPayloads.onProviderLoginToken.provider;
            }
        }

        data.referrer = document.referrer;
        BrandsCom.CookieManager.setItem('updateUUID', true, Number.POSITIVE_INFINITY,  "/", document.domain, security);

        $.ajax({
            type: 'POST',
            url: endpointURL + '/api/auth',
            data: data,
            success: function (data) {
                console.log('login returned the following ', data);
            },
            failure: function (data) {
                console.log(data);
                console.log('Error while authenticating. ' + data);
            }
        });
    }

    function onCaptureSessionEnded(result) {
        BrandsCom.CookieManager.removeItem('sessionUUID', '/', document.domain)

        $.ajax({
            type: "POST",
            url: endpointURL + '/api/onCaptureSessionEnded',
            success: function(data) {
                console.log('Capture Session Ended returned the following ', data);
            },
            failure: function(data) {
                console.log('Capture Session Ended returned the following ' + data);
            }
        });
    }

    function submitEvent(eventName) {
        return function (result) {

            var data = _.isObject(result) ? _.pick(result, coolFields) : {};
            var url = endpointURL + '/api/' + eventName;
            $.ajax({
                url: url,
                method: 'POST',
                data: data,
                dataType: 'json',
                success: function (data, textStatus, jqXHR) {

                    console.log('success submitting event ' + eventName + ' to server at ' + url, 'status', textStatus, data);
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    console.log('error submitting ' + eventName + ' to ' + endpointURL, textStatus, errorThrown);
                }
            });
        };
    }

    /* this is the list of janrain events. */
    var handlers = {
        onAuthWidgetContentPlaced: null,
        onAuthWidgetLoad: null,
        onCaptureAutoSaveUpdate: null,
        onCaptureContentChange: null,
        onCaptureControlFailed: null,
        onCaptureControlSuccesss: null,
        onCaptureCustomEvent: null,
        onCaptureError: null,
        onCaptureExpiredToken: null,
        onCaptureFormError: null,
        onCaptureInvalidToken: null,
        onCaptureLinkAccountError: null,
        onCaptureModalReady: null,
        onCaptureScreenShow: null,
        onCaptureServerValidationFailed: null,
        onCaptureSubscriptionUpdate: null,
        onCaptureAccessDenied: null,
        onCaptureAccountDeactivateFailed: null,
        onCaptureAccountDeactivateSuccess: null,
        onCaptureAccountReactivateFailed: null,
        onCaptureAccountReactivateSuccess: null,
        onCaptureBackplaneInitFailed: null,
        onCaptureBackplaneReady: null,
        onCaptureEmailSent: submitEvent('onCaptureEmailSent'),
        onCaptureEmailVerficationSuccess: null,
        onCaptureEmailVerificationFailed: null,
        onCaptureEmailVerificationSuccess: null,
        onCaptureFederateLogin: null,
        onCaptureFederateNoLogin: null,
        onCaptureFederateRefreshedToken: null,
        onCaptureForgotPasswordCodeFailed: submitEvent('onCaptureForgotPasswordCodeFailed'),
        onCaptureForgotPasswordCodeSuccess: submitEvent('onCaptureForgotPasswordCodeSuccess'),
        onCaptureLoginFailed: null,
        onCaptureLoginStart: null,
        onCaptureLoginSuccess: onCaptureLoginSuccess,
        onCaptureProfileCookieSet: null,
        onCaptureProfileLink: submitEvent('onCaptureProfileLink'),
        onCaptureProfileSaveFailed: submitEvent('onCaptureProfileSaveFailed'),
        onCaptureProfileSaveSuccess: submitEvent('onCaptureProfileSaveSuccess'),
        onCaptureProfileUnlink: submitEvent('onCaptureProfileUnlink'),
        onCaptureRegistrationFailed: null,
        onCaptureRegistrationStart: null,
        onCaptureRegistrationSuccess: onCaptureRegistrationSuccess,
        onCaptureRenderComplete: null,
        onCaptureRenderStart: null,
        onCaptureSaveFailed: null,
        onCaptureSaveSuccess: null,
        onCaptureSessionCreated: null,
        onCaptureSessionEnded: onCaptureSessionEnded,
        onCaptureSessionFound: null,
        onCaptureSessionNotFound: null,
        onCaptureTransactionTimeout: null,
        onCaptureValidationComplete: null,
        onCaptureValidationFailed: null,
        onCaptureValidationSuccess: null,
        onCssLoad: null,
        onCustomizationChange: null,
        onModalClose: null,
        onModalOpen: null,
        onModalWidgetReady: null,
        onReturnExperienceFound: null,
        onProviderLoginCancel: null,
        onProviderLoginComplete: null,
        onProviderLoginError: null,
        onProviderLoginStart: null,
        onProviderLoginSuccess: null,
        onProviderLoginToken: submitEvent('onProviderLoginToken'),
        onProviderLogoutComplete: submitEvent('onProviderLogoutComplete'),
        onProviderLogoutStart: null
    };

    _.each(handlers, function (handler, event) {

        janrain.events[event].addHandler(genericHandler(event));
        if (handler) {
            janrain.events[event].addHandler(handler);
        }
    });
}

