$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CarRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "To test the car registration functionality from auto company",
  "description": "",
  "id": "to-test-the-car-registration-functionality-from-auto-company",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As a customer, I want to select the type of car I want to sell, so that I can receive an offer from auto company",
  "description": "",
  "id": "to-test-the-car-registration-functionality-from-auto-company;as-a-customer,-i-want-to-select-the-type-of-car-i-want-to-sell,-so-that-i-can-receive-an-offer-from-auto-company",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@success_test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user selects manufacturer \"Chevrolet\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "selects main-type \"Cruze\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user retrieve built-dates by selected main-type",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "response includes the following dates",
  "rows": [
    {
      "cells": [
        "2009",
        "2009"
      ],
      "line": 11
    },
    {
      "cells": [
        "2010",
        "2010"
      ],
      "line": 12
    },
    {
      "cells": [
        "2011",
        "2011"
      ],
      "line": 13
    },
    {
      "cells": [
        "2012",
        "2012"
      ],
      "line": 14
    },
    {
      "cells": [
        "2013",
        "2013"
      ],
      "line": 15
    },
    {
      "cells": [
        "2014",
        "2014"
      ],
      "line": 16
    },
    {
      "cells": [
        "2015",
        "2015"
      ],
      "line": 17
    },
    {
      "cells": [
        "2016",
        "2016"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CarStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 2636432900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chevrolet",
      "offset": 27
    }
  ],
  "location": "CarStepDefinitions.userSelectsManufacturer(String)"
});
formatter.result({
  "duration": 1069300800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cruze",
      "offset": 19
    }
  ],
  "location": "CarStepDefinitions.selectsMainType(String)"
});
formatter.result({
  "duration": 557425901,
  "status": "passed"
});
formatter.match({
  "location": "CarStepDefinitions.userRetrieveBuiltDatesBySelectedMainType()"
});
formatter.result({
  "duration": 508035000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CarStepDefinitions.verifyStatusCode(int)"
});
formatter.result({
  "duration": 1563499,
  "status": "passed"
});
formatter.match({
  "location": "CarStepDefinitions.responseIncludesData(String,String\u003e)"
});
formatter.result({
  "duration": 190002400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should not be authorised without wa_key",
  "description": "",
  "id": "to-test-the-car-registration-functionality-from-auto-company;user-should-not-be-authorised-without-wa-key",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user selects \"Chevrolet\" manufacturer without wa_key",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the status code should be 401",
  "keyword": "Then "
});
formatter.match({
  "location": "CarStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 609112900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chevrolet",
      "offset": 14
    }
  ],
  "location": "CarStepDefinitions.userSelectsManufacturerWithoutWa_key(String)"
});
formatter.result({
  "duration": 1025872499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 26
    }
  ],
  "location": "CarStepDefinitions.verifyStatusCode(int)"
});
formatter.result({
  "duration": 573400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User calls web service to get manufacturer with incorrect wa_key",
  "description": "",
  "id": "to-test-the-car-registration-functionality-from-auto-company;user-calls-web-service-to-get-manufacturer-with-incorrect-wa-key",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user selects \"Chevrolet\" manufacturer with invalid wa_key",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the status code should be 403",
  "keyword": "Then "
});
formatter.match({
  "location": "CarStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 777615400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chevrolet",
      "offset": 14
    }
  ],
  "location": "CarStepDefinitions.userSelectsManufacturerWithInvalidWa_key(String)"
});
formatter.result({
  "duration": 1790200100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 26
    }
  ],
  "location": "CarStepDefinitions.verifyStatusCode(int)"
});
formatter.result({
  "duration": 1144999,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "As a customer, I wont be able to delete existing record",
  "description": "",
  "id": "to-test-the-car-registration-functionality-from-auto-company;as-a-customer,-i-wont-be-able-to-delete-existing-record",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "user try to delete \"Chevrolet\" manufacturer",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the status code should be 403",
  "keyword": "Then "
});
formatter.match({
  "location": "CarStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 556872401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chevrolet",
      "offset": 20
    }
  ],
  "location": "CarStepDefinitions.userTryToDeleteManufacturer(String)"
});
formatter.result({
  "duration": 1270294500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 26
    }
  ],
  "location": "CarStepDefinitions.verifyStatusCode(int)"
});
formatter.result({
  "duration": 490100,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "As a customer, I wont be allowed to create new record",
  "description": "",
  "id": "to-test-the-car-registration-functionality-from-auto-company;as-a-customer,-i-wont-be-allowed-to-create-new-record",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "user try to create new record for manufacturer",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the status code should be 405",
  "keyword": "Then "
});
formatter.match({
  "location": "CarStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 471954601,
  "status": "passed"
});
formatter.match({
  "location": "CarStepDefinitions.userTryToCreateNewRecordForManufacturer()"
});
formatter.result({
  "duration": 465448000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 26
    }
  ],
  "location": "CarStepDefinitions.verifyStatusCode(int)"
});
formatter.result({
  "duration": 462999,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "As a user I want to make sure the bad request is handled",
  "description": "",
  "id": "to-test-the-car-registration-functionality-from-auto-company;as-a-user-i-want-to-make-sure-the-bad-request-is-handled",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user selects manufacturer \"Chevrolet\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "user sends bad request to fetch main-types",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the status code should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "CarStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 452520700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chevrolet",
      "offset": 27
    }
  ],
  "location": "CarStepDefinitions.userSelectsManufacturer(String)"
});
formatter.result({
  "duration": 739135700,
  "status": "passed"
});
formatter.match({
  "location": "CarStepDefinitions.userSendsBadRequestToFetchMainTypes()"
});
formatter.result({
  "duration": 1032137100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 26
    }
  ],
  "location": "CarStepDefinitions.verifyStatusCode(int)"
});
formatter.result({
  "duration": 1005199,
  "status": "passed"
});
});