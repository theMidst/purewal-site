
    function getJson(request, state_change) {
        if (state_change === undefined) {
            state_change = 'push';
        }
        $.ajax({
            type: 'GET',
            url: request,
            dataType: 'json',
            context: document.body,
            beforeSend: function() {
            },
            success: function(data) {
                setTimeout(function(){
                    $('.blocks-inner').append(data.content);
                    setTimeout(function(){
                        document.getElementsByClassName('blocks-inner')[0].classList.remove('transition');
                        $('.block-inner').removeClass('forward').removeClass('back');
                    }, 400);
                    if (state_change == 'push') {
                        window.history.pushState(request, null, request);
                    } else {
                        window.history.replaceState(request, null, request);
                        if (location.hash != "") {
                            setFieldsetByAnchor(location.hash, false);
                        }
                    }
                    if (typeof init === 'function') {
                        init();
                    }
                }, 100);
            },
            error: function(data) {
                alert('There was an error communicating with our server, please try again in a moment');
            }
        });
    }

    //google autocomplete address
    var componentForm = {
        street_number: 'long_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'long_name',
        postal_code: 'short_name'
    };

    function initAutocomplete($field, $autocomplete) {
        $autocomplete = new google.maps.places.Autocomplete(
            document.getElementById($field+'_autocomplete'),
            {
                componentRestrictions: {country: 'ca'}
            }
        );

        $autocomplete.addListener('place_changed', function(event) {
            fillInAddress($field, $autocomplete);
        });
    }

    function fillInAddress($field, $autocomplete) {
        $('.warn').remove();
        $('input.valid').removeClass('valid');

        var place = $autocomplete.getPlace();
        for (var component in componentForm) {
            if (component != "street_number" && component != "route" ) {
                document.getElementById($field+'_'+component).value = '';
            }
        }
        var fullAddress = [];
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                var val = place.address_components[i][componentForm[addressType]];

                if (addressType != "street_number" && addressType != "route" ) {
                    if (addressType === 'administrative_area_level_1' && val === 'Québec') {
                        val = 'Quebec';
                    }
                    document.getElementById($field+'_'+addressType).value = val;
                    $('#'+$field+'_'+addressType).addClass('valid');
                }
            }
            if (addressType == "street_number") {
                fullAddress[0] = val;
            } else if (addressType == "route") {
                fullAddress[1] = val;
            }
        }

        //Compare the Place Street Address to the captured Street Address
        var placeEntireAddress = $('#'+$field+'_autocomplete').val();
        var placeStreetAddress = placeEntireAddress.substr(0, placeEntireAddress.indexOf(','));
        var capturedStreetAddress = fullAddress.join(" ");
        if (placeStreetAddress != capturedStreetAddress) {
            $('#'+$field+'_full_address').before('<span class="warn">Please check that this is the address you were expecting.</span>');
            $('input.valid').removeClass('valid');
        } else {
            $('#'+$field+'_full_address').addClass('valid');
        }

        //Check if the other fields were populated, if not throw a warning
        if($('#'+$field+'_city_locality').val() == '') {
            $('#'+$field+'_locality').before('<span class="warn">We could not find your city, please add it.</span>');
        }
        if($('#'+$field+'_administrative_area_level_1').val() == '') {
            $('#'+$field+'_administrative_area_level_1').before('<span class="warn">We could not find your province, please add it.</span>');
        }
        if($('#'+$field+'_postal_code').val() == '') {
            $('#'+$field+'_postal_code').before('<span class="warn">We could not find your postal code, please add it.</span>');
        }

        document.getElementById($field+'_full_address').value = capturedStreetAddress;
        $('.'+$field+'_autocomplete-fields').animate({height: 'show', opacity: 1}, 350);
    }

    function throwCheckmarks () {
        $('.status.check').addClass('fire-animation');
    }

    $(window).load(function() {
        throwCheckmarks();
        document.getElementsByClassName('blocks-inner')[0].classList.remove('transition');
        $('.block-inner').removeClass('forward').removeClass('back');
        if (typeof init === 'function') {
            init();
        }
    });

    window.addEventListener('popstate', function(e) {
        $('.block-inner').addClass('exit-forward');
        setTimeout(function(){
            $('.blocks-inner').addClass('transition');
            $('.blocks-inner').empty();
        }, 100);
        var request = e.state;
        if (request != null) {
            getJson(request, 'replace');
        } else {
            getJson('overview', 'replace');
        }
    });

    $('.exit-trigger').on('click touch', function() {
        $('.block-inner').addClass('exit');
        setTimeout(function(){
            $('.blocks-inner').addClass('transition');
            $('.blocks-inner').empty();
        }, 100);
        var request = $(this).data('block');
        $('.exit-trigger.active').removeClass('active');
        $(this).addClass('active');
        getJson(request);
    });
