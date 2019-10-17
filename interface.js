$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $.get('http://localhost:4567', function(data) {
    thermostat.temperature = data //JSON.parse(data).temp;
    $('#temperature').text(thermostat.temperature);
  });

  
  $.post('http://localhost:4567/temp')


  $('#temperature-up').click(function() { // event listener
    thermostat.up(); // update model
    updateTemperature(); // update view
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#power-saving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('activated!')
    updateTemperature();
  })

  $('#power-saving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(city + " is: " + data.main.temp);
    })
  }

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })
})

