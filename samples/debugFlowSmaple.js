let debugFlowSample = {
    "actionCalls": [],
    "apexPluginCalls": [],
    "apiVersion": 59,
    "assignments": [
        {
            "assignmentItems": [
                {
                    "assignToReference": "temp",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": true,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Some_loop"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Do sometjing",
            "locationX": 308,
            "locationY": 758,
            "name": "Do_sometjing",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "temp",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": true,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": null,
            "description": null,
            "elementSubtype": null,
            "label": "Some other",
            "locationX": 484,
            "locationY": 650,
            "name": "Some_other",
            "processMetadataValues": []
        }
    ],
    "choices": [],
    "collectionProcessors": [],
    "constants": [],
    "decisions": [
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Some_other"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "If Something",
            "locationX": 176,
            "locationY": 542,
            "name": "If_Something",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Temp_Text",
                            "operator": "EqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": ""
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": true,
                        "processMetadataValues": [],
                        "targetReference": "Hello_World"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Do",
                    "name": "Do",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Temp_Text",
                            "operator": "EqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": ""
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Some_loop"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "One more",
                    "name": "One_more",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Hello_World"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Test Dec",
            "locationX": 176,
            "locationY": 134,
            "name": "Test_Dec",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "temp",
                            "operator": "EqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": true,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Hello_World"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "First Path",
                    "name": "First_Path",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "temp",
                            "operator": "EqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": false,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Hello_World"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Secoond Path",
                    "name": "Secoond_Path",
                    "processMetadataValues": []
                }
            ]
        }
    ],
    "description": null,
    "dynamicChoiceSets": [],
    "environments": [
        "Default"
    ],
    "formulas": [],
    "interviewLabel": "Test Flpw {!$Flow.CurrentDateTime}",
    "isAdditionalPermissionRequiredToRun": null,
    "isOverridable": null,
    "isTemplate": null,
    "label": "Test Flpw",
    "loops": [
        {
            "assignNextValueToReference": null,
            "collectionReference": "loopVar",
            "description": null,
            "elementSubtype": null,
            "iterationOrder": "Asc",
            "label": "Some loop",
            "locationX": 220,
            "locationY": 650,
            "name": "Some_loop",
            "nextValueConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Do_sometjing"
            },
            "noMoreValuesConnector": null,
            "processMetadataValues": []
        }
    ],
    "migratedFromWorkflowRuleName": null,
    "orchestratedStages": [],
    "overriddenFlow": null,
    "processMetadataValues": [
        {
            "name": "BuilderType",
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "LightningFlowBuilder"
            }
        },
        {
            "name": "CanvasMode",
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "AUTO_LAYOUT_CANVAS"
            }
        },
        {
            "name": "OriginBuilderType",
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "LightningFlowBuilder"
            }
        }
    ],
    "processType": "Flow",
    "recordCreates": [],
    "recordDeletes": [],
    "recordLookups": [
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "If_Something"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Aadhar_Ref_No__c",
                    "operator": "NotEqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": ""
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Something",
            "locationX": 176,
            "locationY": 434,
            "name": "Get_Something",
            "object": "Account",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": null,
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        }
    ],
    "recordRollbacks": [],
    "recordUpdates": [],
    "runInMode": null,
    "screens": [
        {
            "allowBack": true,
            "allowFinish": true,
            "allowPause": true,
            "backButtonLabel": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Something"
            },
            "description": null,
            "elementSubtype": null,
            "fields": [
                {
                    "choiceReferences": null,
                    "dataType": "String",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Temp Text",
                    "fieldType": "InputField",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Temp_Text",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                }
            ],
            "helpText": null,
            "label": "Hello World",
            "locationX": 176,
            "locationY": 326,
            "name": "Hello_World",
            "nextOrFinishButtonLabel": null,
            "pauseButtonLabel": null,
            "pausedText": null,
            "processMetadataValues": [],
            "rules": [],
            "showFooter": true,
            "showHeader": true
        }
    ],
    "sourceTemplate": null,
    "start": {
        "connector": {
            "isGoTo": null,
            "processMetadataValues": [],
            "targetReference": "Test_Dec"
        },
        "description": null,
        "doesRequireRecordChangedToMeetCriteria": null,
        "elementSubtype": null,
        "filterFormula": null,
        "filterLogic": null,
        "filters": [],
        "label": null,
        "locationX": 50,
        "locationY": 0,
        "name": null,
        "object": null,
        "objectContainer": null,
        "processMetadataValues": [],
        "recordTriggerType": null,
        "schedule": null,
        "scheduledPaths": [],
        "segment": null,
        "triggerType": null
    },
    "startElementReference": null,
    "status": "Draft",
    "steps": [],
    "subflows": [],
    "textTemplates": [],
    "timeZoneSidKey": null,
    "transforms": [],
    "triggerOrder": null,
    "urls": null,
    "variables": [
        {
            "apexClass": null,
            "dataType": "String",
            "description": null,
            "isCollection": true,
            "isInput": false,
            "isOutput": false,
            "name": "loopVar",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "String",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "temp",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": null
        }
    ],
    "waits": []
}

export default debugFlowSample;