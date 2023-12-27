let flowSampleMetadata = {
    "actionCalls": [
        {
            "actionName": "KCCDigital_UploadHelper",
            "actionType": "apex",
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Copy_1_of_Get_Document_Checklist_Item"
            },
            "dataTypeMappings": [],
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "flowTransactionModel": "CurrentTransaction",
            "inputParameters": [
                {
                    "name": "linkedEntityIds",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "{!Get_Document_Checklist_Item.Id}~AddressProof"
                    }
                }
            ],
            "label": "Add File",
            "locationX": 1623,
            "locationY": 10850,
            "name": "Add_File",
            "outputParameters": [],
            "processMetadataValues": [],
            "storeOutputAutomatically": null
        },
        {
            "actionName": "KYC_AddressWrapperHelper",
            "actionType": "apex",
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Copy_1_of_Get_Program_Document_ID"
            },
            "dataTypeMappings": [],
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "flowTransactionModel": "CurrentTransaction",
            "inputParameters": [
                {
                    "name": "adrId",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Address.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "label": "Get KYC Address",
            "locationX": 1326,
            "locationY": 9986,
            "name": "Get_KYC_Address",
            "outputParameters": [],
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "actionName": "Kcc_Digital_InvokeAPI",
            "actionType": "apex",
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Nsdl_Karza_API_status"
            },
            "dataTypeMappings": [],
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "flowTransactionModel": "CurrentTransaction",
            "inputParameters": [
                {
                    "name": "recordId",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LAR_ToUpdate.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "name": "sequenceNo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "5001"
                    }
                }
            ],
            "label": "Hit PAN Nsdl",
            "locationX": 842,
            "locationY": 8030,
            "name": "Hit_PAN_Nsdl",
            "outputParameters": [],
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "actionName": "Kcc_Digital_InvokeAPI",
            "actionType": "apex",
            "connector": null,
            "dataTypeMappings": [],
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Error_Flag"
            },
            "flowTransactionModel": "CurrentTransaction",
            "inputParameters": [
                {
                    "name": "bulkAction",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "AccountShare"
                    }
                },
                {
                    "name": "recordId",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LoanApplication.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "name": "sequenceNo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "BulkAction"
                    }
                },
                {
                    "name": "userId",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_LA_RM_Details.AssignedUser_Assigned_to_RM__r.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "label": "Insert Account Share Record for RM",
            "locationX": 1348,
            "locationY": 1538,
            "name": "Insert_Account_Share_Record_for_RM",
            "outputParameters": [],
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "actionName": "KCCDigital_UploadHelper",
            "actionType": "apex",
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_If_Get_Communication_Address_Is_Null_Or_Not"
            },
            "dataTypeMappings": [],
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "flowTransactionModel": "CurrentTransaction",
            "inputParameters": [
                {
                    "name": "linkedEntityIds",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "{!Create_Document_Checklist_Item}~AddressProof"
                    }
                }
            ],
            "label": "Make Attachment",
            "locationX": 1425,
            "locationY": 12644,
            "name": "Make_Attachment",
            "outputParameters": [],
            "processMetadataValues": [],
            "storeOutputAutomatically": null
        },
        {
            "actionName": "KCCDigital_UploadHelper",
            "actionType": "apex",
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_File_Uploaded_Message"
            },
            "dataTypeMappings": [],
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "flowTransactionModel": "CurrentTransaction",
            "inputParameters": [
                {
                    "name": "linkedEntityIds",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "{!Get_PAN_Document_Checklist_Item.Id}~PANCard"
                    }
                }
            ],
            "label": "Make Attachment for PAN Card",
            "locationX": 1106,
            "locationY": 8894,
            "name": "Make_Attachment_for_PAN_Card",
            "outputParameters": [],
            "processMetadataValues": [],
            "storeOutputAutomatically": null
        },
        {
            "actionName": "Kcc_Digital_InvokeAPI",
            "actionType": "apex",
            "connector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Get_Nsdl_Karza_API_status"
            },
            "dataTypeMappings": [],
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_OVD_Screen_Fault"
            },
            "flowTransactionModel": "CurrentTransaction",
            "inputParameters": [
                {
                    "name": "recordId",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LAR_ToUpdate.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "name": "sequenceNo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "SequenceNo",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "label": "Rehit Karza Nsdl API",
            "locationX": 50,
            "locationY": 8978,
            "name": "Rehit_Karza_Nsdl_API",
            "outputParameters": [],
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        }
    ],
    "apexPluginCalls": [],
    "apiVersion": 56,
    "assignments": [
        {
            "assignmentItems": [
                {
                    "assignToReference": "noCoapplicantAdded",
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Other_Details_Screen"
            },
            "description": null,
            "elementSubtype": null,
            "label": "addCoapplicantFlag",
            "locationX": 1733,
            "locationY": 15356,
            "name": "addCoapplicantFlag",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "AccountPrimaryApplicant.Marital__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Marital_Status",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Email__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Email_Input.value",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Email_ID__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Email_Input.value",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.PAN__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "PAN_Input.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Employee_ID_RM_Code__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Owner_Details.Employee_Id__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Voter_ID__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "OVD_VoterID.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Is_Pan_Number_Change"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Account and LAR Demographic Details",
            "locationX": 1524,
            "locationY": 4292,
            "name": "Assig_Account_and_LAR_values",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "AccountPrimaryApplicant.Address_Line_1_Comm__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Communication_Address.addressLine1__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Address_Line_2_Comm__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Communication_Address.addressLine2__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Landmark_Communication__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Communication_Address.addressLine3__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Pincode_Comm__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Communication_Address.Master_Pincode__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.EKYC_initiated__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": false,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Branch_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_LA_Branch.Branch__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_Account_Other_Details"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Address Fields on Account",
            "locationX": 2019,
            "locationY": 16694,
            "name": "Assign_Address_Fields_on_Account",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "Fault_DemographicSection",
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
            "label": "Assign_DemographciFault",
            "locationX": 4329,
            "locationY": 5300,
            "name": "Assign_DemographciFault",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "Fault_DemographicSection",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
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
                "targetReference": "Check_PAN_Available_Or_Not"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Demographic Fault False",
            "locationX": 1326,
            "locationY": 7706,
            "name": "Assign_Demographic_Fault_False",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "Fault_DemographicSection",
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "SKip_KYC_Scren"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Error Flag",
            "locationX": 1612,
            "locationY": 1646,
            "name": "Assign_Error_Flag",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Father_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "RelativeName.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Is_Opted_true"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Father Name to LAR",
            "locationX": 1887,
            "locationY": 13700,
            "name": "Assign_Father_Name_to_LAR",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "AccountPrimaryApplicant.Title__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "02"
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_LAR_Title_Female_Married"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Female Married Title",
            "locationX": 1326,
            "locationY": 3176,
            "name": "Assign_Female_Married_Title",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "AccountPrimaryApplicant.Title__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "TitleMs",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_LAR_Female_UnMarried_Title"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Female Title",
            "locationX": 1590,
            "locationY": 3176,
            "name": "Assign_Female_Title",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "ShowPANFileUploadErrorMsg",
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "OVD_Details_Screen"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign File Not Uploaded Message",
            "locationX": 842,
            "locationY": 8570,
            "name": "Assign_File_Not_Uploaded_Message",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "ShowPANFileUploadErrorMsg",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
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
                "targetReference": "Assign_OVD_Screen_Fault_Success"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign File Uploaded Message",
            "locationX": 1370,
            "locationY": 9086,
            "name": "Assign_File_Uploaded_Message",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "fileNotUploaded1",
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Address_Details_Page"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Flag",
            "locationX": 633,
            "locationY": 10742,
            "name": "Assign_Flag",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "FlagFileNotUploaded",
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Add_Address"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Flag For File Not Uploaded",
            "locationX": 897,
            "locationY": 12644,
            "name": "Assign_Flag_For_File_Not_Uploaded",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "ErrorFlagToSameAsPerAddress",
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Address_Details_Page"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Flag To Same As Per Address",
            "locationX": 3801,
            "locationY": 16910,
            "name": "Assign_Flag_To_Same_As_Per_Address",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "demographicEditableFlag",
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
                },
                {
                    "assignToReference": "CounterOne",
                    "operator": "Add",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": 1,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "FAR_Account"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Hide EKYC Details",
            "locationX": 1876,
            "locationY": 1322,
            "name": "Assign_Hide_EKYC_Details",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "SequenceNo",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "5002"
                    }
                },
                {
                    "assignToReference": "RetriggerKarzaNsdlAPI",
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
                "targetReference": "Retrigger_Karza_Nsdl_APi"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Karza Fail",
            "locationX": 314,
            "locationY": 8678,
            "name": "Assign_Karza_Fail",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Title__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Ms."
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Decision_Marital_Status_on_LAR"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign LAR Female UnMarried Title",
            "locationX": 1590,
            "locationY": 3284,
            "name": "Assign_LAR_Female_UnMarried_Title",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Gender__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Male"
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Copy_1_of_Assign_Account_and_LAR_Demographic_Details"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign LAR Gender",
            "locationX": 996,
            "locationY": 4400,
            "name": "Assign_LAR_Gender",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Title__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Mrs."
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Decision_Marital_Status_on_LAR"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign LAR Title Female Married",
            "locationX": 1326,
            "locationY": 3284,
            "name": "Assign_LAR_Title_Female_Married",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.FirstName__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "First_Name",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.KYC_First_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "First_Name",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.KYC_Last_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Last_Name",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.LastName__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Last_Name",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.KYC_Middle_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Middle_Name",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Email_ID__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Email_Input.value",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.PAN__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "PAN_Input.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.KYC_Gender__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Gender",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.DOB_DD_MM_YYYY__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "DOB",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.KYC_DOB__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "DOB",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Contact_Number__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Contact_No",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Aadhaar_UID_Optional__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Aadhar_Number",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Driving_License__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "OVD_Driving_Lisence.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Voter_ID__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "OVD_VoterID.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Passport__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "OVD_Passport.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Is_Pan_Number_Change"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign LAR Values",
            "locationX": 1128,
            "locationY": 4700,
            "name": "Assign_LAR_Values",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "AccountPrimaryApplicant.Title__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "01"
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Title_LAR"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Male Title",
            "locationX": 1062,
            "locationY": 3176,
            "name": "Assign_Male_Title",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Marital_Status__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "M"
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_PAN_Available"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Married Status",
            "locationX": 1062,
            "locationY": 3584,
            "name": "Assign_Married_Status",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "SequenceNo",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "5001"
                    }
                },
                {
                    "assignToReference": "RetriggerKarzaNsdlAPI",
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
                "targetReference": "Retrigger_Karza_Nsdl_APi"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign NSDL Failed",
            "locationX": 50,
            "locationY": 8678,
            "name": "Assign_NSDL_Failed",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Opted_For_Loan_Protector__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "superProtectFormula",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Other_Details_Value"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Opt for Loan Protector",
            "locationX": 1887,
            "locationY": 14108,
            "name": "Assign_Opt_for_Loan_Protector",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "Fault_OtherDetails",
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Other_Details_Screen"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Other Details Fault",
            "locationX": 3537,
            "locationY": 17426,
            "name": "Assign_Other_Details_Fault",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "AccountPrimaryApplicant.Income_Range__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Income_Range",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Mother_s_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "MotherName.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Relative_Indicator__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Relative_Indicator",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Father_Spouce_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "RelativeName.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Relationship__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Relationship_with_Applicant",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Religion__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "getReligionAPIName",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Category__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Cast",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_Program_Name"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Other Details Value",
            "locationX": 2019,
            "locationY": 14300,
            "name": "Assign_Other_Details_Value",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Marital_Status__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Others"
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_PAN_Available"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Others Status",
            "locationX": 1590,
            "locationY": 3584,
            "name": "Assign_Others_Status",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "Fault_OVDScreen",
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "OVD_Details_Screen"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign OVD Screen Fault",
            "locationX": 314,
            "locationY": 9086,
            "name": "Assign_OVD_Screen_Fault",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "Fault_OVDScreen",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
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
                "targetReference": "Skipped_EKYC_For_Permanent_address"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign OVD Screen Fault Success",
            "locationX": 1370,
            "locationY": 9194,
            "name": "Assign_OVD_Screen_Fault_Success",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.PAN_Available__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "PANFromLAR",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Owner_Details"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign PAN Available Value",
            "locationX": 1194,
            "locationY": 3884,
            "name": "Assign_PAN_Available_Value",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "PanCardvariable",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LAR_ToUpdate.PAN__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Account_From_Primary_Applicant"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Pan Values",
            "locationX": 1326,
            "locationY": 674,
            "name": "Assign_Pan_Values",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "ShowRMEKYCSection",
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
                },
                {
                    "assignToReference": "RM_EKYC.renderNext",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Get_Account_From_Primary_Applicant"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign RM EKYC",
            "locationX": 1084,
            "locationY": 1214,
            "name": "Assign_RM_EKYC",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Spouse_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "RelativeName.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Is_Opted_true"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Spouse Name to LAR",
            "locationX": 2151,
            "locationY": 13700,
            "name": "Assign_Spouse_Name_to_LAR",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Title__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Mr."
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Decision_Marital_Status_on_LAR"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Title LAR Male",
            "locationX": 1062,
            "locationY": 3284,
            "name": "Assign_Title_LAR",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "RetriggerKarzaNsdlAPI",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
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
                "targetReference": "Retrigger_Karza_Nsdl_APi"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign to Next Process",
            "locationX": 578,
            "locationY": 8678,
            "name": "Assign_to_Next_Process",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Marital_Status__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Un"
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_PAN_Available"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Unmarried Status",
            "locationX": 1326,
            "locationY": 3584,
            "name": "Assign_Unmarried_Status",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "bureauInitiated",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Run Bureau"
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Fire_Posidex"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Value to Bureau Initiate Variable",
            "locationX": 1887,
            "locationY": 17126,
            "name": "Assign_Value_to_Bureau_Initiate_Variable",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.PAN_Status__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Not started"
                    }
                },
                {
                    "assignToReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": null
                },
                {
                    "assignToReference": "LAR_ToUpdate.Karza_Status__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Not Started"
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_Account_Demographic_Details"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Assign Values to NSDL Karza",
            "locationX": 1194,
            "locationY": 5000,
            "name": "Assign_Values_to_NSDL_Karza",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "bureauInitiated",
                    "operator": "Assign",
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
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Set_Flag_To_Create_Co_Applicant"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Clear Bureau Variable",
            "locationX": 2019,
            "locationY": 17426,
            "name": "Clear_Bureau_Variable",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "ErrorFlagToSameAsPerAddress",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": false,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "Counter1",
                    "operator": "Add",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": 1,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Is_Communication_Same_as_Permanent"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Clear Error Flag If Set",
            "locationX": 2019,
            "locationY": 11672,
            "name": "Clear_Error_Flag_If_Set",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "ErrorFlagToAddAddress",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
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
                "targetReference": "File_Uploaded_Or_Not"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Clear Flag If True",
            "locationX": 1161,
            "locationY": 12428,
            "name": "Clear_Flag_If_True",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "AccountPrimaryApplicant.Marital__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Marital_Status",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Email__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Email_Input.value",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Employee_ID_RM_Code__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Owner_Details.Employee_Id__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.KYC_First_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "First_Name",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.KYC_Last_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Last_Name",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Middle_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Middle_Name",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.KYC_Gender__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Gender",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.KYC_DOB__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "DOB",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Aadhaar_No__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Aadhar_Number",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Mobile_No__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Contact_No",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.First_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "First_Name",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Last_Name__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Last_Name",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.DOB__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "DOB",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Name",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "fullName",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Gender__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Gender",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Voter_ID__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "OVD_VoterID.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Passport__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "OVD_Passport.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "assignToReference": "AccountPrimaryApplicant.Driving_License_Number__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "OVD_Driving_Lisence.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_LAR_Values"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Copy 1 of Assign Account and LAR Demographic Details",
            "locationX": 1128,
            "locationY": 4592,
            "name": "Copy_1_of_Assign_Account_and_LAR_Demographic_Details",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.Gender__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Female"
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Copy_1_of_Assign_Account_and_LAR_Demographic_Details"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Copy 1 of Assign LAR Gender",
            "locationX": 1260,
            "locationY": 4400,
            "name": "Copy_1_of_Assign_LAR_Gender",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "countOfLARRecords",
                    "operator": "AssignCount",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_LAR",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_if_coApplicant_present"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Count LAR",
            "locationX": 1865,
            "locationY": 15140,
            "name": "Count_LAR",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "ErrorFlagToSameAsPerAddress",
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Address_Details_Page"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Error Address",
            "locationX": 1887,
            "locationY": 11282,
            "name": "Error_Address",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "CounterOne",
                    "operator": "Add",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": 1,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Get_Account_From_Primary_Applicant"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Increasing Counter",
            "locationX": 2140,
            "locationY": 1214,
            "name": "Increasing_Counter",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "AutoRefreshCounter_Masking",
                    "operator": "Add",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": 1,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_LAR_Masking_Status"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Increment Masking Counter",
            "locationX": 1282,
            "locationY": 6164,
            "name": "Increment_Masking_Counter",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "OVD_RefreshCounter",
                    "operator": "Add",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": 1,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_NSDL_and_Karza_API_Success_or_Not"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Increment OVD Refresh Counter",
            "locationX": 842,
            "locationY": 8354,
            "name": "Increment_OVD_Refresh_Counter",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "AadharDocumentUploadFlag",
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
                "targetReference": "Raise_Aadhar_Masking_IM"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Set Aadhar Card Flag to True",
            "locationX": 1282,
            "locationY": 5840,
            "name": "Set_Aadhar_Card_Flag_to_True",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "AadharDocumentUploadFlag",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
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
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Demographic_Details_Screen"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Set Aadhar Upload to false",
            "locationX": 930,
            "locationY": 5840,
            "name": "Set_Aadhar_Upload_to_false",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "FlagToCreateApplicant",
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
            "label": "Set Flag To Create Applicant",
            "locationX": 1887,
            "locationY": 17642,
            "name": "Set_Flag_To_Create_Applicant",
            "processMetadataValues": []
        },
        {
            "assignmentItems": [
                {
                    "assignToReference": "LAR_ToUpdate.KYC_Type__c",
                    "operator": "Assign",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_LAR_Details.KYC_Type__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_LAR_Demographic_Details"
            },
            "description": null,
            "elementSubtype": null,
            "label": "Update KYCType",
            "locationX": 1326,
            "locationY": 5408,
            "name": "Update_KYCType",
            "processMetadataValues": []
        }
    ],
    "choices": [
        {
            "choiceText": "Driving License",
            "dataType": "String",
            "description": null,
            "name": "Driving_License",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "Driving License"
            }
        },
        {
            "choiceText": "Driving Lisence",
            "dataType": "String",
            "description": null,
            "name": "Driving_Lisence",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "Driving Lisence"
            }
        },
        {
            "choiceText": "Female",
            "dataType": "String",
            "description": null,
            "name": "Female",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "F"
            }
        },
        {
            "choiceText": "INR 1,00,001 to 2,50,000/-",
            "dataType": "String",
            "description": null,
            "name": "IncomeRange_1To2Point5",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "02"
            }
        },
        {
            "choiceText": "INR 25 Lakh to 50 Lakh",
            "dataType": "String",
            "description": null,
            "name": "IncomeRange_25To50",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "05"
            }
        },
        {
            "choiceText": "INR 2,50,001 to 5,00,000/-",
            "dataType": "String",
            "description": null,
            "name": "IncomeRange_2Point5To5",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "02"
            }
        },
        {
            "choiceText": "More than 5,00,000/-",
            "dataType": "String",
            "description": null,
            "name": "IncomeRange_MoreThan5",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "03"
            }
        },
        {
            "choiceText": "Up to INR 1,00,000/-",
            "dataType": "String",
            "description": null,
            "name": "IncomeRange_Upto100000",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "01"
            }
        },
        {
            "choiceText": "House Construction - Kachha",
            "dataType": "String",
            "description": null,
            "name": "KacchaHouse",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "Construction - Kachha"
            }
        },
        {
            "choiceText": "Male",
            "dataType": "String",
            "description": null,
            "name": "Male",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "M"
            }
        },
        {
            "choiceText": "House Construction - Pakka",
            "dataType": "String",
            "description": null,
            "name": "PakkaHouse",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "Construction - Pakka"
            }
        },
        {
            "choiceText": "Passport",
            "dataType": "String",
            "description": null,
            "name": "Passport",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "Passport"
            }
        },
        {
            "choiceText": "House Construction - Semi Pakka",
            "dataType": "String",
            "description": null,
            "name": "SemiPakkaHouse",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "Construction - Semi Pakka"
            }
        },
        {
            "choiceText": "<span style=\"color: rgb(0, 0, 0); font-family: Helvetica; font-size: 11.36px; background-color: rgb(255, 255, 255);\">Mr</span>",
            "dataType": "String",
            "description": null,
            "name": "Title_Mr",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "01"
            }
        },
        {
            "choiceText": "Mrs",
            "dataType": "String",
            "description": null,
            "name": "Title_Mrs",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "02"
            }
        },
        {
            "choiceText": "Ms",
            "dataType": "String",
            "description": null,
            "name": "Title_Ms",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "03"
            }
        },
        {
            "choiceText": "Voter ID",
            "dataType": "String",
            "description": null,
            "name": "Voter_ID1",
            "processMetadataValues": [],
            "userInput": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "Voter ID"
            }
        }
    ],
    "collectionProcessors": [],
    "constants": [
        {
            "dataType": "Boolean",
            "description": null,
            "name": "falseFlag",
            "processMetadataValues": [],
            "value": {
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
    "decisions": [
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Set_Aadhar_Card_Flag_to_True"
            },
            "defaultConnectorLabel": "Uploaded Aadhar Document",
            "description": null,
            "elementSubtype": null,
            "label": "Aadhar Document Uploaded",
            "locationX": 1018,
            "locationY": 5732,
            "name": "Aadhar_Document_Uploaded",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "LAR_ToUpdate.Masking_Status__c",
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
                                "stringValue": "Success"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Is_KCC_Digital"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Adhaar Already Masked",
                    "name": "Adhaar_Already_Masked",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "checkIfAadharDocumentUploaded",
                            "operator": "LessThanOrEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 2,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Set_Aadhar_Upload_to_false"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Not Uploaded Aadhar Document File",
                    "name": "Not_Uploaded_Aadhar_Document_File",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_to_Next_Process"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "API Status Decision",
            "locationX": 314,
            "locationY": 8570,
            "name": "API_Status_Decision",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "LAR_ToUpdate.PAN_Status__c",
                            "operator": "NotEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Valid"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_NSDL_Failed"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "NSDL API Fail",
                    "name": "NSDL_API_Fail",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                            "operator": "IsNull",
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
                        "targetReference": "Assign_Karza_Fail"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Karza API Failed",
                    "name": "Karza_API_Failed",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Owner_Details"
            },
            "defaultConnectorLabel": "Not Primary Owner",
            "description": null,
            "elementSubtype": null,
            "label": "Assign PAN Available",
            "locationX": 1326,
            "locationY": 3776,
            "name": "Assign_PAN_Available",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "LAR_ToUpdate.FinServ__Role__c",
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
                                "stringValue": "Primary Owner"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_PAN_Available_Value"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Role Primary Owner",
                    "name": "Role_Primary_Owner",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Fire_Posidex"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Check Bureau Status",
            "locationX": 2019,
            "locationY": 17018,
            "name": "Check_Bureau_Status",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Get_Bureau_Status.Bureau_Status__c",
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
                                "stringValue": "Not Started"
                            }
                        },
                        {
                            "leftValueReference": "CCFRRegionFormula",
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
                        "targetReference": "Assign_Value_to_Bureau_Initiate_Variable"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Bureau Status Not Started",
                    "name": "Bureau_Status_Not_Started",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Spouse_Name_to_LAR"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Check Father or Spouse Name",
            "locationX": 2019,
            "locationY": 13592,
            "name": "Check_Father_or_Spouse_Name",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Relative_Indicator",
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
                                "stringValue": "F"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_Father_Name_to_LAR"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Father Name",
                    "name": "Father_Name",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_LAR_Other_Details"
            },
            "defaultConnectorLabel": "Count greater than 1",
            "description": null,
            "elementSubtype": null,
            "label": "Check if coApplicant present",
            "locationX": 1865,
            "locationY": 15248,
            "name": "Check_if_coApplicant_present",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "countOfLARRecords",
                            "operator": "LessThanOrEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 1,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "leftValueReference": "Add_CoApplicant.renderNext",
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
                        "targetReference": "addCoapplicantFlag"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "If count less than 1",
                    "name": "If_count_less_than_1",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Skipped_EKYC_ForCommunicationAddress"
            },
            "defaultConnectorLabel": "Get Address is Not Null",
            "description": "Check is added because update can only be used for Primary Applicant. For other applicants, we need to Create a Record.",
            "elementSubtype": null,
            "label": "Check If Communication Address is Null",
            "locationX": 2877,
            "locationY": 11888,
            "name": "Check_If_Communication_Address_is_Null",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Get_Communication_Address_Record.Id",
                            "operator": "IsNull",
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
                        "targetReference": "Skipped_EKYC1"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Get Address is Null",
                    "name": "Get_Address_is_Null",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Demographic_Fault_False"
            },
            "defaultConnectorLabel": "EKYC",
            "description": null,
            "elementSubtype": null,
            "label": "Check if EKYC or Physical",
            "locationX": 1480,
            "locationY": 7322,
            "name": "Check_if_EKYC_or_Physical",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "LAR_ToUpdate.KYC_Type__c",
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
                                "stringValue": "Physical KYC"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Insert_Aadhar_Token_IM"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Physical KYC",
                    "name": "Physical_KYC",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_Communication_Address_Of_LAR_I"
            },
            "defaultConnectorLabel": "Address Is Not Null",
            "description": null,
            "elementSubtype": null,
            "label": "Check If Get Communication Address Is Null Or Not",
            "locationX": 1425,
            "locationY": 12752,
            "name": "Check_If_Get_Communication_Address_Is_Null_Or_Not",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Get_Communication_Address_Record.Id",
                            "operator": "EqualTo",
                            "processMetadataValues": [],
                            "rightValue": null
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Create_Communication_Address_If_Null_I"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Address Is Null",
                    "name": "Address_Is_Null",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Check_Adhaar_Masking_Status"
            },
            "defaultConnectorLabel": "Failed Or Pending",
            "description": null,
            "elementSubtype": null,
            "label": "Check Masking Status",
            "locationX": 1282,
            "locationY": 6380,
            "name": "Check_Masking_Status",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Check_LAR_Masking_Status.Masking_Status__c",
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
                                "stringValue": "Success"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Is_KCC_Digital"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Success",
                    "name": "Success",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_PAN_DocChecklistItem"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Check NSDL and Karza API Success or Not",
            "locationX": 842,
            "locationY": 8462,
            "name": "Check_NSDL_and_Karza_API_Success_or_Not",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "1 OR 2 OR (3 AND 4)",
                    "conditions": [
                        {
                            "leftValueReference": "LAR_ToUpdate.PAN_Status__c",
                            "operator": "NotEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Valid"
                            }
                        },
                        {
                            "leftValueReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                            "operator": "IsNull",
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
                        },
                        {
                            "leftValueReference": "PanCardvariable",
                            "operator": "NotEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "PAN_Input.fieldValue",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "leftValueReference": "PanCardvariable",
                            "operator": "IsNull",
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
                        "targetReference": "API_Status_Decision"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Validate Pan is Hit",
                    "name": "Validate_Pan_is_Hit",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                            "operator": "LessThan",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 70,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "leftValueReference": "LengthOfPANDocument",
                            "operator": "LessThanOrEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 2,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "leftValueReference": "Get_PAN_Document_Checklist_Item.Document_Upload_Status__c",
                            "operator": "NotEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Pending"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_File_Not_Uploaded_Message"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Is PAN Document Not Uploaded",
                    "name": "Is_PAN_Document_Not_Uploaded",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Skipped_EKYC_For_Permanent_address"
            },
            "defaultConnectorLabel": "PAN Not Available",
            "description": null,
            "elementSubtype": null,
            "label": "Check PAN Available Or Not",
            "locationX": 1326,
            "locationY": 7814,
            "name": "Check_PAN_Available_Or_Not",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "PANAvailable",
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
                        "targetReference": "Get_PAN_Document_Checklist_Item"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "PAN Available",
                    "name": "PAN_Available",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_LAR_Other_Details"
            },
            "defaultConnectorLabel": "KCC Digital",
            "description": null,
            "elementSubtype": null,
            "label": "Check Program Name",
            "locationX": 2019,
            "locationY": 14408,
            "name": "Check_Program_Name",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "SelectedProgramName",
                            "operator": "NotEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "KCC Digital"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Get_Asset_Income_Record"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Not KCC Digital",
                    "name": "Not_KCC_Digital",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Others_Status"
            },
            "defaultConnectorLabel": "Others",
            "description": null,
            "elementSubtype": null,
            "label": "Decision Marital Status on LAR",
            "locationX": 1326,
            "locationY": 3476,
            "name": "Decision_Marital_Status_on_LAR",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Marital_Status",
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
                                "stringValue": "M"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_Married_Status"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Married",
                    "name": "Married",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Marital_Status",
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
                                "stringValue": "U"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_Unmarried_Status"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Unmarried",
                    "name": "Unmarried",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Waiting_for_EKYC"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Exit Auto Refresh",
            "locationX": 1326,
            "locationY": 890,
            "name": "Exit_Auto_Refresh",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "AccountPrimaryApplicant.FinServ__KYCStatus__c",
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
                                "stringValue": "Success"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "FAR_Account"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "KYC Status Success",
                    "name": "KYC_Status_Success",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Make_Attachment"
            },
            "defaultConnectorLabel": "File Uploaded",
            "description": null,
            "elementSubtype": null,
            "label": "File Uploaded Or Not",
            "locationX": 1161,
            "locationY": 12536,
            "name": "File_Uploaded_Or_Not",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "LengthOfUploadedFile",
                            "operator": "LessThanOrEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 2,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_Flag_For_File_Not_Uploaded"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "File Not Uploaded",
                    "name": "File_Not_Uploaded",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Skipped_EKYC_ForAddress"
            },
            "defaultConnectorLabel": "File Uploaded",
            "description": null,
            "elementSubtype": null,
            "label": "File Uploaded or not",
            "locationX": 1326,
            "locationY": 10634,
            "name": "File_Uploaded_or_not1",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "lengthOfUploadedFile1",
                            "operator": "LessThanOrEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 2,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "leftValueReference": "demographicEditableFlag",
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
                        "targetReference": "Assign_Flag"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "File Not Uploaded",
                    "name": "File_Not_Uploaded1",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Copy_1_of_Assign_LAR_Gender"
            },
            "defaultConnectorLabel": "Female",
            "description": "This is for pushing values in LAR for physical kyc customer",
            "elementSubtype": null,
            "label": "Gender Decision",
            "locationX": 1128,
            "locationY": 4292,
            "name": "Gender_Decision",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Gender",
                            "operator": "EqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "Male",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_LAR_Gender"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Male",
                    "name": "Male_LAR",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_If_Communication_Address_is_Null"
            },
            "defaultConnectorLabel": "Communication Address Same",
            "description": null,
            "elementSubtype": null,
            "label": "Is Communication Same as Permanent",
            "locationX": 2019,
            "locationY": 11780,
            "name": "Is_Communication_Same_as_Permanent",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Communication_Address_same_as_above",
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
                        "targetReference": "Get_Program_Document_ID"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Communication Address Different",
                    "name": "Communication_Address_Different",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Is_Primary_Owner"
            },
            "defaultConnectorLabel": "Not Digital",
            "description": null,
            "elementSubtype": null,
            "label": "Is KCC Digital",
            "locationX": 1326,
            "locationY": 6806,
            "name": "Is_KCC_Digital",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "SelectedProgramName",
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
                                "stringValue": "KCC Digital"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_Demographic_Fault_False"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "KCC Digital",
                    "name": "KCC_Digital",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Communication_Address"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Is LAR Primary Applicant",
            "locationX": 2019,
            "locationY": 15806,
            "name": "Is_LAR_Primary_Applicant",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__Role__c",
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
                                "stringValue": "Primary Owner"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Update_LA_Branch"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Is Primary Applicant",
                    "name": "Is_Primary_Applicant",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Copy_1_of_Copy_1_of_Update_KYC_Type_For_EKYC"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Is LAR Primary Owner",
            "locationX": 1326,
            "locationY": 2120,
            "name": "Is_LAR_Primary_Owner",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "demographicEditableFlag",
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
                        "targetReference": "Get_Account_Details"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Is Physical KYC",
                    "name": "Is_Physical_KYC",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__Role__c",
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
                                "stringValue": "Primary Owner"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Copy_1_of_Update_KYC_Type_For_EKYC"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "LAR is Primary Owner",
                    "name": "LAR_is_Primary_Owner",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Other_Details_Value"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Is Opted true",
            "locationX": 2019,
            "locationY": 13892,
            "name": "Is_Opted_true",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Opt_for_Super_Protect_Credit",
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
                        "targetReference": "Update_Super_credit_true"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "is true",
                    "name": "is_true",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_Account_Demographic_Details"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Is Pan Number Change",
            "locationX": 1326,
            "locationY": 4892,
            "name": "Is_Pan_Number_Change",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "PanCardvariable",
                            "operator": "NotEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "PAN_Input.fieldValue",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_Values_to_NSDL_Karza"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Change NSDL and Karza Status",
                    "name": "Change_NSDL_and_Karza_Status",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Is_KCC_Digital"
            },
            "defaultConnectorLabel": "Not Physical KYC",
            "description": null,
            "elementSubtype": null,
            "label": "Is Physical KYC For Aadhar Masking",
            "locationX": 1326,
            "locationY": 5624,
            "name": "Is_Physical_KYC_For_Aadhar_Masking",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "demographicEditableFlag",
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
                        "targetReference": "Aadhar_Document_Uploaded"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "is Physical KYC For Masking",
                    "name": "is_Physical_KYC_For_Masking",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_LAR_Updated"
            },
            "defaultConnectorLabel": "Not Primary Owner",
            "description": null,
            "elementSubtype": null,
            "label": "Is Primary Owner",
            "locationX": 1480,
            "locationY": 6914,
            "name": "Is_Primary_Owner",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__Role__c",
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
                                "stringValue": "Primary Owner"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Copy_1_of_Update_LA_Name"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Primary Owner",
                    "name": "Primary_Owner",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_KYC_Type_For_EKYC"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Next Prcoess",
            "locationX": 1744,
            "locationY": 1106,
            "name": "Next_Prcoess",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "RM_EKYC.renderNext",
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
                        "targetReference": "Assign_RM_EKYC"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "RM Proceed with EKYC",
                    "name": "RM_Proceed_with_EKYC",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "AssignCaseToRM.renderNext",
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
                        "targetReference": "Assign_Case_to_RmSubFlow"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Assign Case to RM",
                    "name": "Assign_Case_to_RM",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "RMSkipEKYC.renderNext",
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
                        "targetReference": "Update_KYC_Type"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Proceed with Physical KYC",
                    "name": "Proceed_with_Physical_KYC",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "AccountPrimaryApplicant.FinServ__KYCStatus__c",
                            "operator": "NotEqualTo",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Success"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Increasing_Counter"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "EKYC Fail show next",
                    "name": "EKYC_Fail_show_next",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Get_Nsdl_Karza_API_status"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Retrigger Karza Nsdl API",
            "locationX": 314,
            "locationY": 8870,
            "name": "Retrigger_Karza_Nsdl_APi",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "RetriggerKarzaNsdlAPI",
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
                        "targetReference": "Rehit_Karza_Nsdl_API"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Retrigger API",
                    "name": "Retrigger_API",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": null,
            "defaultConnectorLabel": "End",
            "description": null,
            "elementSubtype": null,
            "label": "Set Flag To Create Co Applicant",
            "locationX": 2019,
            "locationY": 17534,
            "name": "Set_Flag_To_Create_Co_Applicant",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "or",
                    "conditions": [
                        {
                            "leftValueReference": "Add_CoApplicant.renderNext",
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
                        "targetReference": "Set_Flag_To_Create_Applicant"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Create Co Applicant",
                    "name": "Create_Co_Applicant",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assig_Account_and_LAR_values"
            },
            "defaultConnectorLabel": "Not Skipped",
            "description": null,
            "elementSubtype": null,
            "label": "Skipped Ekyc ?",
            "locationX": 1326,
            "locationY": 4184,
            "name": "Skipped_Ekyc",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "demographicEditableFlag",
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
                        "targetReference": "Gender_Decision"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Skipped",
                    "name": "Skipped",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Create_Communication_Address_II"
            },
            "defaultConnectorLabel": "Not Skipped",
            "description": null,
            "elementSubtype": null,
            "label": "Skipped EKYC",
            "locationX": 2613,
            "locationY": 11996,
            "name": "Skipped_EKYC1",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "demographicEditableFlag",
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
                        "targetReference": "Copy_1_of_Create_Communication_Address_II"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Skipped/ Physical KYC",
                    "name": "Skipped1",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Address"
            },
            "defaultConnectorLabel": "EKYC",
            "description": null,
            "elementSubtype": null,
            "label": "Skipped EKYC ?",
            "locationX": 1326,
            "locationY": 9578,
            "name": "Skipped_EKYC_For_Permanent_address",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "demographicEditableFlag",
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
                        "targetReference": "Create_Permanent_Address_for_Physical_KYC"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Skipped / Physical KYC",
                    "name": "Skipped_Physical_KYC",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_KYC_Address"
            },
            "defaultConnectorLabel": "Not Skipped",
            "description": null,
            "elementSubtype": null,
            "label": "Is Physical KYC",
            "locationX": 2019,
            "locationY": 10742,
            "name": "Skipped_EKYC_ForAddress",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "demographicEditableFlag",
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
                        "targetReference": "Add_File"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Skipped",
                    "name": "SkippedForAddress",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_Communication_Address_of_LAR_II"
            },
            "defaultConnectorLabel": "Not Skipped / EKYC",
            "description": null,
            "elementSubtype": null,
            "label": "Skipped EKYC",
            "locationX": 3141,
            "locationY": 11996,
            "name": "Skipped_EKYC_ForCommunicationAddress",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "demographicEditableFlag",
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
                        "targetReference": "Copy_1_of_Update_Communication_Address_of_LAR_II"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Skipped / Physical KYC",
                    "name": "SkippedForCommunicationAddress",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Female_Title"
            },
            "defaultConnectorLabel": "Is Female",
            "description": null,
            "elementSubtype": null,
            "label": "Title Decision",
            "locationX": 1326,
            "locationY": 3068,
            "name": "Title_Decision",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "AccountPrimaryApplicant.KYC_Gender__c",
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
                                "stringValue": "M"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_Male_Title"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Is Male",
                    "name": "Is_Male",
                    "processMetadataValues": []
                },
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "AccountPrimaryApplicant.KYC_Gender__c",
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
                                "stringValue": "F"
                            }
                        },
                        {
                            "leftValueReference": "Marital_Status",
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
                                "stringValue": "M"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Assign_Female_Married_Title"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Is Female And Married",
                    "name": "Is_Female_And_Married",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_LAR"
            },
            "defaultConnectorLabel": "Current User is Not Primary Owner",
            "description": null,
            "elementSubtype": null,
            "label": "Update Decision For Asset Income Item Record",
            "locationX": 1865,
            "locationY": 14732,
            "name": "Update_Decision_For_Asset_Income_Item_Record",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__Role__c",
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
                                "stringValue": "Primary Owner"
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Update_Asset_Income_Item_Record"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "Current User is Primary Owner",
                    "name": "Current_User_is_Primary_Owner",
                    "processMetadataValues": []
                }
            ]
        },
        {
            "defaultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_File_Uploaded_Message"
            },
            "defaultConnectorLabel": "Default Outcome",
            "description": null,
            "elementSubtype": null,
            "label": "Update PAN DocChecklistItem",
            "locationX": 1370,
            "locationY": 8570,
            "name": "Update_PAN_DocChecklistItem",
            "processMetadataValues": [],
            "rules": [
                {
                    "conditionLogic": "and",
                    "conditions": [
                        {
                            "leftValueReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                            "operator": "LessThan",
                            "processMetadataValues": [],
                            "rightValue": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 70,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "connector": {
                        "isGoTo": null,
                        "processMetadataValues": [],
                        "targetReference": "Get_Updated_Loan_Applicant_Role"
                    },
                    "description": null,
                    "doesRequireRecordChangedToMeetCriteria": null,
                    "label": "PAN Doc Is Uploaded",
                    "name": "PAN_Doc_Is_Uploaded",
                    "processMetadataValues": []
                }
            ]
        }
    ],
    "description": "Changes for L3PS-11646\nChanges for KS-6737- Pritee\nChanges for KS-6690- Pritee\nChanged Ownership and Residence Type change for Co-Applicant--Sagar\nAdded update element for KYC type field. - Mayur\nAdd \"Relationship with Applicant\" field in Other details for Co-applicants - Pritee\nOwnership Type is not required for co applicant - Pritee\nBranch mandatory - Karan\nAdded Default Values for Other Details Screen - Karan\nMarked Ownership and House Type as Required - Karan\nRemoved EsignEstamp field value in Fire Posidex Create Record-Sagar,Karan\nAdded changes for masking\nRemoving Masking Chnages\nChanges for KS-7668 - Ankit\nAdded Masking Status field",
    "dynamicChoiceSets": [
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "ApplicantCast",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Applicant_Cast__c",
            "picklistObject": "Flow_Picklist_Fields__mdt",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": "Asc",
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "ApplicantReligion",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Applicant_Religion__c",
            "picklistObject": "Flow_Picklist_Fields__mdt",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "String",
            "description": null,
            "displayField": "Branch_Name__c",
            "filterLogic": "and",
            "filters": [
                {
                    "field": "User__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "$User.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "limit": null,
            "name": "Branch_ChoiceSet",
            "object": "User_Branch__c",
            "outputAssignments": [],
            "picklistField": null,
            "picklistObject": null,
            "processMetadataValues": [],
            "sortField": "Branch_Name__c",
            "sortOrder": "Asc",
            "valueField": "Branch_Master__c"
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "ChoiceSet_MaritalStatus",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Marital__c",
            "picklistObject": "Account",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": "Asc",
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "ChoiceSet_RelativeIndicator",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Relative_Indicator__c",
            "picklistObject": "Account",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": "Asc",
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "CoAppOccupationPicklist",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Occupation__c",
            "picklistObject": "Account",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "genderChoiseSet",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Gender__c",
            "picklistObject": "FinServ__FinancialAccountRole__c",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "HouseOwnershipAssetChoice",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Ownership__c",
            "picklistObject": "Asset_and_Other_Income_Item__c",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "houseResidenceType",
            "object": null,
            "outputAssignments": [],
            "picklistField": "House_Residence_Type__c",
            "picklistObject": "FinServ__FinancialAccountRole__c",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "IncRangePicklist",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Income_Range__c",
            "picklistObject": "Account",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "MaritalStatusPicklist",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Marital__c",
            "picklistObject": "Account",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "ownershipType",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Ownership_Type__c",
            "picklistObject": "FinServ__FinancialAccountRole__c",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "relationshipWithApplicant",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Relationship__c",
            "picklistObject": "Flow_Picklist_Fields__mdt",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": "Asc",
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "RelativeIndicatorChoiceSet",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Relative_Indicator__c",
            "picklistObject": "Account",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "titleChoiceCollectionEditable",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Title__c",
            "picklistObject": "FinServ__FinancialAccountRole__c",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": "Asc",
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "TitleChoiceSet",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Title__c",
            "picklistObject": "Account",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "TypeofAddress",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Type__c",
            "picklistObject": "Address__c",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        },
        {
            "collectionReference": null,
            "dataType": "Picklist",
            "description": null,
            "displayField": null,
            "filterLogic": null,
            "filters": [],
            "limit": null,
            "name": "TypeOfAddressProof",
            "object": null,
            "outputAssignments": [],
            "picklistField": "Address_Proof_Type__c",
            "picklistObject": "Address__c",
            "processMetadataValues": [],
            "sortField": null,
            "sortOrder": null,
            "valueField": null
        }
    ],
    "environments": [
        "Default"
    ],
    "formulas": [
        {
            "dataType": "String",
            "description": null,
            "expression": "RIGHT({!SelectedLARandAccountId}, 18)",
            "name": "AccountId",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": null,
            "expression": "LEFT( {!EKYCPermanentAddress} , 35 )",
            "name": "AddressFirst35",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": null,
            "expression": "RIGHT( {!EKYCPermanentAddress}, LEN( {!EKYCPermanentAddress} ) - 35 - 40 )",
            "name": "AddressLastFull",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": null,
            "expression": "LEFT( RIGHT( {!EKYCPermanentAddress} , LEN( {!EKYCPermanentAddress} ) - 35), 40)",
            "name": "AddressMiddle40",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": null,
            "expression": "IF( LEN ( TEXT ({!LAR_ToUpdate.Aadhar_Status__c} ) ) <= 0, '' , IF ( ISPICKVAL ({!LAR_ToUpdate.Aadhar_Status__c}  , 'Aadhaar Seeding is Successful' ) , 'Aadhaar is seeded with PAN' , 'Aadhaar is not seeded with PAN' ) )",
            "name": "AdhaarStatusDisplayFormula",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "Boolean",
            "description": "Initiate Bureau only when User is NOT in CCFR Applicable States",
            "expression": "IF( INCLUDES( {!Get_User_Details.Default_Region__c} , 'MAHARASHTRA' ) , FALSE, \nIF( INCLUDES( {!Get_User_Details.Default_Region__c} , 'MADHYA PRADESH' ) , FALSE, \nIF( INCLUDES( {!Get_User_Details.Default_Region__c} , 'Andhra Pradesh' ) , FALSE, \nIF( INCLUDES( {!Get_User_Details.Default_Region__c} , 'KARNATAKA' ) , FALSE, \nIF( INCLUDES( {!Get_User_Details.Default_Region__c} , 'ODISHA' ) , FALSE,\nIF( INCLUDES( {!Get_User_Details.Default_Region__c} , 'TELANGANA' ) , FALSE,\n IF( INCLUDES( {!Get_User_Details.Default_Region__c} , 'HARYANA' ) , FALSE, TRUE ) ) ) ) ) ) )",
            "name": "CCFRRegionFormula",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "Number",
            "description": null,
            "expression": "LEN({!upload_unmasked_aadhar_card.contentDocIds})",
            "name": "checkIfAadharDocumentUploaded",
            "processMetadataValues": [],
            "scale": 0
        },
        {
            "dataType": "String",
            "description": null,
            "expression": "IF(ISNULL({!AccountPrimaryApplicant.KYC_Last_Name__c}) || ISBLANK({!AccountPrimaryApplicant.KYC_Last_Name__c}), '.',{!AccountPrimaryApplicant.KYC_Last_Name__c} )",
            "name": "EKYCLastName",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": "Formula to remove \"<>\" from Address",
            "expression": "SUBSTITUTE( {!AccountPrimaryApplicant.KYC_Address__c}, '<>', ' ')",
            "name": "EKYCPermanentAddress",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": "full name for skipped kyc applicant",
            "expression": "{!First_Name} + IF(ISBLANK({!Middle_Name} ), ' ', ' ' + {!Middle_Name}  + ' ' )+{!Last_Name}",
            "name": "fullName",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": null,
            "expression": "{!AccountPrimaryApplicant.KYC_First_Name__c} + IF(ISBLANK({!AccountPrimaryApplicant.Middle_Name__c}), ' ', ' ' + {!AccountPrimaryApplicant.Middle_Name__c} + ' ' ) + {!EKYCLastName}",
            "name": "FullNameEKYC",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": null,
            "expression": "IF(ISPICKVAL({!AccountPrimaryApplicant.KYC_Gender__c}, 'M'), 'Male', 'Female')",
            "name": "Gender_Formula",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": null,
            "expression": "if({!Religion}=='Hindu','01',\nif({!Religion}=='Muslim','02',\nif({!Religion}=='Sikh','03',\nif({!Religion}=='Christian','04',\nif({!Religion}=='Jain','05',\nif({!Religion}=='Others','06',\n'07'))))))",
            "name": "getReligionAPIName",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "Boolean",
            "description": null,
            "expression": "AND( {!LoanApplication.Assigned_to_Canvasser__r.Id} == {!$User.Id})",
            "name": "IsUserCanvasser",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "Boolean",
            "description": null,
            "expression": "AND({!LoanApplication.AssignedUser_Assigned_to_RM__r.Id} == {!$User.Id})",
            "name": "IsUserRelationshipManager",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": null,
            "expression": "LEFT({!SelectedLARandAccountId}, 18)",
            "name": "LARId",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "Number",
            "description": null,
            "expression": "LEN({!UploadPAN.contentDocIds})",
            "name": "LengthOfPANDocument",
            "processMetadataValues": [],
            "scale": 0
        },
        {
            "dataType": "Number",
            "description": null,
            "expression": "LEN( {!UploadAddressProof.contentDocIds} )",
            "name": "LengthOfUploadedFile",
            "processMetadataValues": [],
            "scale": 0
        },
        {
            "dataType": "Number",
            "description": null,
            "expression": "LEN({!UploadAddressProof1.contentDocIds})",
            "name": "lengthOfUploadedFile1",
            "processMetadataValues": [],
            "scale": 0
        },
        {
            "dataType": "Boolean",
            "description": null,
            "expression": "IF({!PANAvailable},True,if(ISNULL({!AccountPrimaryApplicant.KYC_Last_Name__c}) || ISBLANK({!AccountPrimaryApplicant.KYC_Last_Name__c}), True,False))",
            "name": "PANFromLAR",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "Boolean",
            "description": null,
            "expression": "IF( {!Opt_for_Super_Protect_Credit} == true, true, false )",
            "name": "superProtectFormula",
            "processMetadataValues": [],
            "scale": null
        },
        {
            "dataType": "String",
            "description": null,
            "expression": "{!$Profile.Name}",
            "name": "UserProfile",
            "processMetadataValues": [],
            "scale": null
        }
    ],
    "interviewLabel": "KCCInstant Individual EKYC {!$Flow.CurrentDateTime}",
    "isAdditionalPermissionRequiredToRun": null,
    "isOverridable": null,
    "isTemplate": null,
    "label": "KCCInstant Individual EKYC",
    "loops": [],
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
    "recordCreates": [
        {
            "assignRecordIdToReference": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Branch_Default_Value"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "inputAssignments": [
                {
                    "field": "Financial_Account_Role__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Master_Pincode__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "PincodeLookup.recordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Communication"
                    }
                },
                {
                    "field": "addressLine1__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_1.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine2__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_2.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine3__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_3.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Copy 1 of Create Communication Address II",
            "locationX": 2481,
            "locationY": 12104,
            "name": "Copy_1_of_Create_Communication_Address_II",
            "object": "Address__c",
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "assignRecordIdToReference": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Document_Checklist_Item"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "inputAssignments": [
                {
                    "field": "Account__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "AccountPrimaryApplicant.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Document_Upload_Status__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Pending"
                    }
                },
                {
                    "field": "Loan_Application__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LoanApplication.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "ParentRecordId__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "ParentRecordName__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "{!Get_Updated_Loan_Applicant_Role.KYC_First_Name__c} {!Get_Updated_Loan_Applicant_Role.KYC_Last_Name__c}"
                    }
                },
                {
                    "field": "Program_Document__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Copy_1_of_Get_Program_Document_ID.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "RecordTypeId",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Copy_1_of_Get_Document_Checklist_Record_Type.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Copy 1 of Create Document Checklist Item",
            "locationX": 1326,
            "locationY": 10310,
            "name": "Copy_1_of_Create_Document_Checklist_Item",
            "object": "Document_Checklist_Item__c",
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "assignRecordIdToReference": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Copy_1_of_Update_KYC_Address"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Error_Address"
            },
            "inputAssignments": [
                {
                    "field": "Document_API__c",
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
                },
                {
                    "field": "Outbound_API__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": false,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Process_Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Loan Application"
                    }
                },
                {
                    "field": "Reference_Id__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Copy_1_of_Get_Document_Checklist_Item.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Reference_Number__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LoanApplication.Loan_Number__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "SVCNAME__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "OMNI_DOC_UPLOAD"
                    }
                }
            ],
            "inputReference": null,
            "label": "Create Address Proof Upload Int",
            "locationX": 1623,
            "locationY": 11066,
            "name": "Create_Address_Proof_Upload_Int",
            "object": "Integration_Message__c",
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "assignRecordIdToReference": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Branch_Default_Value"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Assign_Flag_To_Same_As_Per_Address"
            },
            "inputAssignments": [
                {
                    "field": "Financial_Account_Role__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LARId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Master_Pincode__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "PincodeMaster.recordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Communication"
                    }
                },
                {
                    "field": "addressLine1__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CommAddressLine_1.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine2__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CommAddLine_2.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine3__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CommAddressLine_3.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Create Communication Address If Null I",
            "locationX": 1161,
            "locationY": 12860,
            "name": "Create_Communication_Address_If_Null_I",
            "object": "Address__c",
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "assignRecordIdToReference": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Branch_Default_Value"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "inputAssignments": [
                {
                    "field": "City__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Address.CityName__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Financial_Account_Role__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Master_Pincode__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Address.Master_Pincode__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "State__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Address.StateName__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Communication"
                    }
                },
                {
                    "field": "addressLine1__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_1.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine2__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_2.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine3__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_3.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Create Communication Address II",
            "locationX": 2745,
            "locationY": 12104,
            "name": "Create_Communication_Address_II",
            "object": "Address__c",
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "assignRecordIdToReference": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Add_Address"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Assign_Flag_To_Same_As_Per_Address"
            },
            "inputAssignments": [
                {
                    "field": "Account__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "AccountPrimaryApplicant.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Document_Upload_Status__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Pending"
                    }
                },
                {
                    "field": "Loan_Application__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LoanApplication.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "ParentRecordId__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "ParentRecordName__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "{!Get_Updated_Loan_Applicant_Role.KYC_First_Name__c} {!Get_Updated_Loan_Applicant_Role.KYC_Last_Name__c}"
                    }
                },
                {
                    "field": "Program_Document__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Program_Document_ID.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "RecordTypeId",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Document_Checklist_Record_Type.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Create Document Checklist Item",
            "locationX": 1161,
            "locationY": 12104,
            "name": "Create_Document_Checklist_Item",
            "object": "Document_Checklist_Item__c",
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "assignRecordIdToReference": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Address"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "inputAssignments": [
                {
                    "field": "Financial_Account_Role__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LARId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Permanent"
                    }
                }
            ],
            "inputReference": null,
            "label": "Create Permanent Address for Physical KYC",
            "locationX": 1194,
            "locationY": 9686,
            "name": "Create_Permanent_Address_for_Physical_KYC",
            "object": "Address__c",
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "assignRecordIdToReference": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Clear_Bureau_Variable"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Other_Details_Fault"
            },
            "inputAssignments": [
                {
                    "field": "EstampEsign_Additional_Details__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "bureauInitiated",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Outbound_API__c",
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
                },
                {
                    "field": "Process_Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Loan Application"
                    }
                },
                {
                    "field": "Reference_Id__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LARId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Reference_Number__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LoanApplication.Loan_Number__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "SVCNAME__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "DEDUPE"
                    }
                },
                {
                    "field": "VERSION__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": 3,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Fire Posidex",
            "locationX": 2019,
            "locationY": 17318,
            "name": "Fire_Posidex",
            "object": "Integration_Message__c",
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "assignRecordIdToReference": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Demographic_Fault_False"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "inputAssignments": [
                {
                    "field": "Outbound_API__c",
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
                },
                {
                    "field": "Process_Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Loan Application"
                    }
                },
                {
                    "field": "Reference_Id__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LARId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Reference_Number__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LoanApplication.Loan_Number__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "SVCNAME__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "ADV_InsertToken"
                    }
                }
            ],
            "inputReference": null,
            "label": "Insert Aadhar Token IM",
            "locationX": 1348,
            "locationY": 7430,
            "name": "Insert_Aadhar_Token_IM",
            "object": "Integration_Message__c",
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        },
        {
            "assignRecordIdToReference": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_Adhaar_Masking_Status"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "inputAssignments": [
                {
                    "field": "Document_API__c",
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
                },
                {
                    "field": "Outbound_API__c",
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
                },
                {
                    "field": "Process_Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Loan Application"
                    }
                },
                {
                    "field": "Reference_Id__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Aadhar_Document_Checklist_Item.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Reference_Number__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LoanApplication.Loan_Number__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "SVCNAME__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "KARZA_AADHAR_MASKING_ATTACH"
                    }
                },
                {
                    "field": "Status__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "New"
                    }
                }
            ],
            "inputReference": null,
            "label": "Raise Aadhar Masking IM",
            "locationX": 1282,
            "locationY": 5948,
            "name": "Raise_Aadhar_Masking_IM",
            "object": "Integration_Message__c",
            "processMetadataValues": [],
            "storeOutputAutomatically": true
        }
    ],
    "recordDeletes": [],
    "recordLookups": [
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_Masking_Status"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LAR_ToUpdate.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Check LAR Masking Status",
            "locationX": 1282,
            "locationY": 6272,
            "name": "Check_LAR_Masking_Status",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Masking_Status__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Create_Address_Proof_Upload_Int"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Loan_Application__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Program_Document__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Copy_1_of_Get_Program_Document_ID.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Account__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "AccountPrimaryApplicant.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Copy 1 of Get Document Checklist Item",
            "locationX": 1623,
            "locationY": 10958,
            "name": "Copy_1_of_Get_Document_Checklist_Item",
            "object": "Document_Checklist_Item__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": null,
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Copy_1_of_Create_Document_Checklist_Item"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "DeveloperName",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Document_Checklist"
                    }
                },
                {
                    "field": "SobjectType",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Document_Checklist_Item__c"
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Copy 1 of Get Document Checklist Record Type",
            "locationX": 1326,
            "locationY": 10202,
            "name": "Copy_1_of_Get_Document_Checklist_Record_Type",
            "object": "RecordType",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Name"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Copy_1_of_Get_Document_Checklist_Record_Type"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Unique_Id__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": 567934,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Active__c",
                    "operator": "EqualTo",
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
            "getFirstRecordOnly": true,
            "label": "Copy 1 of Get Program Document ID",
            "locationX": 1326,
            "locationY": 10094,
            "name": "Copy_1_of_Get_Program_Document_ID",
            "object": "Program_Document__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Name"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Is_LAR_Primary_Owner"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__RelatedAccount__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": null,
            "label": "FAR Account",
            "locationX": 1326,
            "locationY": 2012,
            "name": "FAR_Account",
            "object": "Account",
            "outputAssignments": [],
            "outputReference": "AccountPrimaryApplicant",
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "First_Name__c",
                "Last_Name__c",
                "KYC_Method__c",
                "FinServ__KYCStatus__c",
                "KYC_DOB__c",
                "KYC_First_Name__c",
                "KYC_Gender__c",
                "KYC_Last_Name__c",
                "KYC_Aadhar_Ref_Number__c",
                "KYC_Address__c",
                "Passport__c",
                "Voter_ID__c",
                "Driving_License_Number__c",
                "Middle_Name__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": null
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Demographic_Details_Screen"
            },
            "description": "This Query is for linking uploaded content version with document checklist item of Aadhar Card",
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "ParentRecordId__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LAR_ToUpdate.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Name",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Aadhar Card"
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Aadhar Document Checklist Item",
            "locationX": 1326,
            "locationY": 2744,
            "name": "Get_Aadhar_Document_Checklist_Item",
            "object": "Document_Checklist_Item__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": null,
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Aadhar_Document_Checklist_Item"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__RelatedAccount__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": null,
            "label": "Get Account Details",
            "locationX": 1326,
            "locationY": 2636,
            "name": "Get_Account_Details",
            "object": "Account",
            "outputAssignments": [],
            "outputReference": "AccountPrimaryApplicant",
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "First_Name__c",
                "Last_Name__c",
                "KYC_Method__c",
                "FinServ__KYCStatus__c",
                "KYC_DOB__c",
                "KYC_First_Name__c",
                "KYC_Gender__c",
                "KYC_Last_Name__c",
                "KYC_Aadhar_Ref_Number__c",
                "KYC_Address__c",
                "Marital__c",
                "Email__c",
                "Mobile_No__c",
                "Mother_s_Name__c",
                "Relative_Indicator__c",
                "Father_Spouce_Name__c",
                "Income_Range__c",
                "PhotoCVID__c",
                "Middle_Name__c",
                "Title__c",
                "Voter_ID__c",
                "Driving_License_Number__c",
                "Passport__c",
                "Gender__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": null
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Exit_Auto_Refresh"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__RelatedAccount__r.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": null,
            "label": "Get Account From Primary Applicant",
            "locationX": 1326,
            "locationY": 782,
            "name": "Get_Account_From_Primary_Applicant",
            "object": "Account",
            "outputAssignments": [],
            "outputReference": "AccountPrimaryApplicant",
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "FinServ__KYCStatus__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": null
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_KYC_Address"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Financial_Account_Role__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Type__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Permanent"
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Address",
            "locationX": 1326,
            "locationY": 9878,
            "name": "Get_Address",
            "object": "Address__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "addressLine1__c",
                "addressLine2__c",
                "CityName__c",
                "StateName__c",
                "PincodeNumber__c",
                "Master_Pincode__c",
                "addressLine3__c",
                "KYC_Address__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_LAR_to_Update_Detailsl"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "FinServ__FinancialAccount__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "KYC_Initiated__c",
                    "operator": "EqualTo",
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
            "getFirstRecordOnly": true,
            "label": "Get All LAR's whose EKYC is pending",
            "locationX": 1326,
            "locationY": 458,
            "name": "Get_All_LAR_s_whose_EKYC_is_pending",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Related_Account_Name__c",
                "FinServ__RelatedAccount__c",
                "PAN_Available__c",
                "PAN__c",
                "FinServ__Role__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_Asset_and_Other_Income_Item"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Loan_Application__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Asset And Other Income",
            "locationX": 1491,
            "locationY": 16130,
            "name": "Get_Asset_And_Other_Income",
            "object": "Assets_and_Other_Incomes__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_Decision_For_Asset_Income_Item_Record"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Assets_and_Other_Income__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Asset_Income_Record.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Type__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "House"
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Asset Income Item Record",
            "locationX": 1865,
            "locationY": 14624,
            "name": "Get_Asset_Income_Item_Record",
            "object": "Asset_and_Other_Income_Item__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Type__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Asset_Income_Item_Record"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Loan_Application__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LoanApplication.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Type__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "House"
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Asset Income Record",
            "locationX": 1865,
            "locationY": 14516,
            "name": "Get_Asset_Income_Record",
            "object": "Assets_and_Other_Incomes__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Records_Get_opted_for_credit_from_Role"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "User__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "$User.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Branch Default Value",
            "locationX": 2019,
            "locationY": 13268,
            "name": "Get_Branch_Default_Value",
            "object": "User_Branch__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Branch_Name__c",
                "Branch_Master__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_Bureau_Status"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LARId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Bureau Status",
            "locationX": 2019,
            "locationY": 16910,
            "name": "Get_Bureau_Status",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Bureau_Status__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_LA_Branch"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Financial_Account_Role__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LARId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Type__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Communication"
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Communication Address",
            "locationX": 2019,
            "locationY": 16478,
            "name": "Get_Communication_Address",
            "object": "Address__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "addressLine1__c",
                "addressLine2__c",
                "addressLine3__c",
                "Master_Pincode__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Clear_Error_Flag_If_Set"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Financial_Account_Role__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Type__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Communication"
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Communication Address Record",
            "locationX": 2019,
            "locationY": 11564,
            "name": "Get_Communication_Address_Record",
            "object": "Address__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "StateName__c",
                "State__c",
                "addressLine1__c",
                "addressLine2__c",
                "addressLine3__c",
                "City__c",
                "CityName__c",
                "Master_Pincode__c",
                "Active__c",
                "InActive__c",
                "Financial_Account_Role__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Address_Details_Page"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Loan_Application__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Program_Document__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Copy_1_of_Get_Program_Document_ID.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Account__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "AccountPrimaryApplicant.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Document Checklist Item",
            "locationX": 1326,
            "locationY": 10418,
            "name": "Get_Document_Checklist_Item",
            "object": "Document_Checklist_Item__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": null,
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Create_Document_Checklist_Item"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "DeveloperName",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Document_Checklist"
                    }
                },
                {
                    "field": "SobjectType",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Document_Checklist_Item__c"
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Document Checklist Record Type",
            "locationX": 1161,
            "locationY": 11996,
            "name": "Get_Document_Checklist_Record_Type",
            "object": "RecordType",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Name"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Address_Fields_on_Account"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get LA Branch",
            "locationX": 2019,
            "locationY": 16586,
            "name": "Get_LA_Branch",
            "object": "FinServ__FinancialAccount__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Branch__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Insert_Account_Share_Record_for_RM"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get LA RM Details",
            "locationX": 1348,
            "locationY": 1430,
            "name": "Get_LA_RM_Details",
            "object": "FinServ__FinancialAccount__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "AssignedUser_Assigned_to_RM__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Count_LAR"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "FinServ__FinancialAccount__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": false,
            "label": "Get LAR",
            "locationX": 1865,
            "locationY": 15032,
            "name": "Get_LAR",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": null,
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_KYCType"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LAR_ToUpdate.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get LAR Details",
            "locationX": 1326,
            "locationY": 5300,
            "name": "Get_LAR_Details",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "KYC_Type__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Title_Decision"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": null,
            "label": "Get Latest LAR Details",
            "locationX": 1326,
            "locationY": 2960,
            "name": "Get_LAR_to_Latest_Details",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": "LAR_ToUpdate",
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "PAN__c",
                "PAN_Available__c",
                "FinServ__Role__c",
                "Marital_Status__c",
                "Aadhaar_UID_Optional__c",
                "Aadhar_Ref_No__c",
                "KYC_Aadhar_Ref_Number__c",
                "KYC_Type__c",
                "AadharVault_Integration_Status__c",
                "Masking_Status__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": null
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Pan_Values"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": null,
            "label": "Get LAR to Update Details",
            "locationX": 1326,
            "locationY": 566,
            "name": "Get_LAR_to_Update_Detailsl",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": "LAR_ToUpdate",
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "PAN__c",
                "PAN_Available__c",
                "FinServ__Role__c",
                "Marital_Status__c",
                "Aadhaar_UID_Optional__c",
                "Aadhar_Ref_No__c",
                "KYC_Aadhar_Ref_Number__c",
                "KYC_Type__c",
                "Masking_Status__c",
                "Masking_Failure_Reason__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": null
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_if_EKYC_or_Physical"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LAR_ToUpdate.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get LAR_Updated",
            "locationX": 1480,
            "locationY": 7214,
            "name": "Get_LAR_Updated",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": null,
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_All_LAR_s_whose_EKYC_is_pending"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": null,
            "label": "Get Loan Application",
            "locationX": 1326,
            "locationY": 350,
            "name": "Get_Loan_Application",
            "object": "FinServ__FinancialAccount__c",
            "outputAssignments": [],
            "outputReference": "LoanApplication",
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Loan_Number__c",
                "Branch__c",
                "OwnerId",
                "Program__c",
                "FinServ__RecordTypeName__c",
                "Assigned_to_Canvasser__c",
                "AssignedUser_Assigned_to_RM__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": null
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "OVD_Details_Screen"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LAR_ToUpdate.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": null,
            "label": "Get Nsdl Karza API status",
            "locationX": 842,
            "locationY": 8138,
            "name": "Get_Nsdl_Karza_API_status",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": "LAR_ToUpdate",
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "PAN_Status__c",
                "Karza_Match_Percentage__c",
                "PAN_Available__c",
                "PAN__c",
                "Integration_Staus_PAN__c",
                "Aadhar_Status__c",
                "Karza_Status__c",
                "Karza_Error__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": null
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Skipped_Ekyc"
            },
            "description": "Flow RM's Details to primary applicant",
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LoanApplication.OwnerId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Owner Details",
            "locationX": 1326,
            "locationY": 4076,
            "name": "Get_Owner_Details",
            "object": "User",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Employee_Id__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Hit_PAN_Nsdl"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Loan_Application__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Name",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "PAN Card"
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get PAN Document Checklist Item",
            "locationX": 842,
            "locationY": 7922,
            "name": "Get_PAN_Document_Checklist_Item",
            "object": "Document_Checklist_Item__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Document_Upload_Status__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Document_Checklist_Record_Type"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Unique_Id__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": 567934,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Active__c",
                    "operator": "EqualTo",
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
            "getFirstRecordOnly": true,
            "label": "Get Program Document ID",
            "locationX": 1161,
            "locationY": 11888,
            "name": "Get_Program_Document_ID",
            "object": "Program_Document__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Name"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Other_Details_Screen"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "FinServ__FinancialAccount__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Opted_For_Loan_Protector__c",
                    "operator": "EqualTo",
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
            "getFirstRecordOnly": null,
            "label": "Get Records Get opted for credit from Role",
            "locationX": 2019,
            "locationY": 13376,
            "name": "Get_Records_Get_opted_for_credit_from_Role",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": "RoleOptedForSuperProtect",
            "processMetadataValues": [],
            "queriedFields": [
                "Id"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": null
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_PAN_DocChecklistItem_Status"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get Updated Loan Applicant Role",
            "locationX": 1106,
            "locationY": 8678,
            "name": "Get_Updated_Loan_Applicant_Role",
            "object": "FinServ__FinancialAccountRole__c",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "KYC_First_Name__c",
                "KYC_Last_Name__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        },
        {
            "assignNullValuesIfNoRecordsFound": false,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Loan_Application"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "$User.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "getFirstRecordOnly": true,
            "label": "Get User Details",
            "locationX": 1326,
            "locationY": 242,
            "name": "Get_User_Details",
            "object": "User",
            "outputAssignments": [],
            "outputReference": null,
            "processMetadataValues": [],
            "queriedFields": [
                "Id",
                "Default_Region__c"
            ],
            "sortField": null,
            "sortOrder": null,
            "storeOutputAutomatically": true
        }
    ],
    "recordRollbacks": [],
    "recordUpdates": [
        {
            "connector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Update_Account_Name"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "KYC_Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "EKYC"
                    }
                }
            ],
            "inputReference": null,
            "label": "Copy 1 of Copy 1 of Update KYC Type For EKYC",
            "locationX": 1546,
            "locationY": 2228,
            "name": "Copy_1_of_Copy_1_of_Update_KYC_Type_For_EKYC",
            "object": "FinServ__FinancialAccountRole__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Branch_Default_Value"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Communication_Address_Record.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Master_Pincode__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "PincodeLookup.recordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine1__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_1.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine2__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_2.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine3__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_3.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Copy 1 of Update Communication Address of LAR II",
            "locationX": 3009,
            "locationY": 12104,
            "name": "Copy_1_of_Update_Communication_Address_of_LAR_II",
            "object": "Address__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Communication_Address_Record"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Error_Address"
            },
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Address.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Address_Proof_Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Address_Proof_Type1",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Master_Pincode__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "PincodeLookup.recordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine1__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_1.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine2__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_2.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine3__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_3.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Copy 1 of Update KYC Address",
            "locationX": 1623,
            "locationY": 11174,
            "name": "Copy_1_of_Update_KYC_Address",
            "object": "Address__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_LA_Name"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "KYC_Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "EKYC"
                    }
                }
            ],
            "inputReference": null,
            "label": "Copy 1 of Update KYC Type For EKYC",
            "locationX": 1282,
            "locationY": 2228,
            "name": "Copy_1_of_Update_KYC_Type_For_EKYC",
            "object": "FinServ__FinancialAccountRole__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_LAR_Updated"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Name",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "FullNameEKYC",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Copy 1 of Update LA Name",
            "locationX": 1348,
            "locationY": 7022,
            "name": "Copy_1_of_Update_LA_Name",
            "object": "FinServ__FinancialAccount__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_User_Details"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "AccountId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "EKYC_initiated__c",
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
                },
                {
                    "field": "KYC_Method__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "EKYC"
                    }
                }
            ],
            "inputReference": null,
            "label": "EKYC Initiated Update",
            "locationX": 1326,
            "locationY": 134,
            "name": "EKYC_Initiated_Update",
            "object": "Account",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_LAR_Details"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_DemographciFault"
            },
            "filterLogic": null,
            "filters": [],
            "inputAssignments": [],
            "inputReference": "AccountPrimaryApplicant",
            "label": "Update Account Demographic Details",
            "locationX": 1326,
            "locationY": 5192,
            "name": "Update_Account_Demographic_Details",
            "object": null,
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Account_Details"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "AccountPrimaryApplicant.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "First_Name__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "AccountPrimaryApplicant.KYC_First_Name__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Last_Name__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "EKYCLastName",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Name",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "FullNameEKYC",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update Account Name",
            "locationX": 1282,
            "locationY": 2444,
            "name": "Update_Account_Name",
            "object": "Account",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Bureau_Status"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Flag_To_Same_As_Per_Address"
            },
            "filterLogic": null,
            "filters": [],
            "inputAssignments": [],
            "inputReference": "AccountPrimaryApplicant",
            "label": "Update Account Other Details",
            "locationX": 2019,
            "locationY": 16802,
            "name": "Update_Account_Other_Details",
            "object": null,
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Asset_And_Other_Income"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Assign_Other_Details_Fault"
            },
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Financial_Account_Role__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_All_LAR_s_whose_EKYC_is_pending.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Type__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Communication"
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "CM_overwritten_distance_from_branch__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Distance_To_Customer_Residence_In_kms",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Distance_From_Branch__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Distance_To_Customer_Residence_In_kms",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update Address Distance from branch",
            "locationX": 1491,
            "locationY": 16022,
            "name": "Update_Address_Distance_from_branch",
            "object": "Address__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Communication_Address"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Assign_Other_Details_Fault"
            },
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Assets_and_Other_Income__c",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Asset_And_Other_Income.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Vintage__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Residence_Vintage_In_years",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update Asset and Other Income Item",
            "locationX": 1491,
            "locationY": 16238,
            "name": "Update_Asset_and_Other_Income_Item",
            "object": "Asset_and_Other_Income_Item__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_LAR"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Asset_Income_Item_Record.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Ownership__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Ownership_Type",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Sub_Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "House_Residence_Type",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update Asset Income Item Record",
            "locationX": 1733,
            "locationY": 14840,
            "name": "Update_Asset_Income_Item_Record",
            "object": "Asset_and_Other_Income_Item__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Branch_Default_Value"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Assign_Flag_To_Same_As_Per_Address"
            },
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Communication_Address_Record.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Master_Pincode__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "PincodeMaster.recordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine1__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CommAddressLine_1.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine2__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CommAddLine_2.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine3__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CommAddressLine_3.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update Communication Address Of LAR I",
            "locationX": 1689,
            "locationY": 12860,
            "name": "Update_Communication_Address_Of_LAR_I",
            "object": "Address__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Branch_Default_Value"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Communication_Address_Record.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "City__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Address.CityName__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "Master_Pincode__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Address.Master_Pincode__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "State__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Address.StateName__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine1__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_1.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine2__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_2.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine3__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_3.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update Communication Address of LAR II",
            "locationX": 3273,
            "locationY": 12104,
            "name": "Update_Communication_Address_of_LAR_II",
            "object": "Address__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Clear_Flag_If_True"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Create_Document_Checklist_Item",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Name",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Address_Proof_type",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update DCI record based on Address proof type selection",
            "locationX": 1161,
            "locationY": 12320,
            "name": "Update_DCI_record_based_on_Address_proof_type_selection",
            "object": "Document_Checklist_Item__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_Communication_Address_Record"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Error_Address"
            },
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Address.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "addressLine1__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_1.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine2__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_2.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                },
                {
                    "field": "addressLine3__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "KYCAddressLine_3.fieldValue",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update KYC Address",
            "locationX": 2415,
            "locationY": 10850,
            "name": "Update_KYC_Address",
            "object": "Address__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Hide_EKYC_Details"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LARId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "KYC_Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Physical KYC"
                    }
                }
            ],
            "inputReference": null,
            "label": "Update KYC Type",
            "locationX": 1876,
            "locationY": 1214,
            "name": "Update_KYC_Type",
            "object": "FinServ__FinancialAccountRole__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "FAR_Account"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LARId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "KYC_Type__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "EKYC"
                    }
                }
            ],
            "inputReference": null,
            "label": "Update KYC Type For EKYC",
            "locationX": 2404,
            "locationY": 1214,
            "name": "Update_KYC_Type_For_EKYC",
            "object": "FinServ__FinancialAccountRole__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_Address_Distance_from_branch"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Assign_Other_Details_Fault"
            },
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Branch__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Branch",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update LA Branch",
            "locationX": 1491,
            "locationY": 15914,
            "name": "Update_LA_Branch",
            "object": "FinServ__FinancialAccount__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_Account_Name"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Name",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "FullNameEKYC",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update LA Name",
            "locationX": 1282,
            "locationY": 2336,
            "name": "Update_LA_Name",
            "object": "FinServ__FinancialAccount__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Is_Physical_KYC_For_Aadhar_Masking"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": null,
            "filters": [],
            "inputAssignments": [],
            "inputReference": "LAR_ToUpdate",
            "label": "Update LAR Demographic Details",
            "locationX": 1326,
            "locationY": 5516,
            "name": "Update_LAR_Demographic_Details",
            "object": null,
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Is_LAR_Primary_Applicant"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Assign_Other_Details_Fault"
            },
            "filterLogic": null,
            "filters": [],
            "inputAssignments": [],
            "inputReference": "LAR_ToUpdate",
            "label": "Update LAR Other Details",
            "locationX": 2019,
            "locationY": 15698,
            "name": "Update_LAR_Other_Details",
            "object": null,
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Make_Attachment_for_PAN_Card"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": {
                "isGoTo": true,
                "processMetadataValues": [],
                "targetReference": "Assign_OVD_Screen_Fault"
            },
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_PAN_Document_Checklist_Item.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Document_Upload_Status__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "Pending"
                    }
                },
                {
                    "field": "File_Name__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "PAN Card - {!Get_Updated_Loan_Applicant_Role.KYC_First_Name__c} {!Get_Updated_Loan_Applicant_Role.KYC_Last_Name__c}"
                    }
                },
                {
                    "field": "ParentRecordName__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": "{!Get_Updated_Loan_Applicant_Role.KYC_First_Name__c} {!Get_Updated_Loan_Applicant_Role.KYC_Last_Name__c}"
                    }
                }
            ],
            "inputReference": null,
            "label": "Update PAN DocChecklistItem Status",
            "locationX": 1106,
            "locationY": 8786,
            "name": "Update_PAN_DocChecklistItem_Status",
            "object": "Document_Checklist_Item__c",
            "processMetadataValues": []
        },
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Assign_Opt_for_Loan_Protector"
            },
            "description": null,
            "elementSubtype": null,
            "faultConnector": null,
            "filterLogic": "and",
            "filters": [
                {
                    "field": "Id",
                    "operator": "EqualTo",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "CurrentRecordId",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputAssignments": [
                {
                    "field": "Super_Protect_Credit__c",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Opt_for_Super_Protect_Credit",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "inputReference": null,
            "label": "Update Super credit true",
            "locationX": 1887,
            "locationY": 14000,
            "name": "Update_Super_credit_true",
            "object": "FinServ__FinancialAccount__c",
            "processMetadataValues": []
        }
    ],
    "runInMode": null,
    "screens": [
        {
            "allowBack": false,
            "allowFinish": true,
            "allowPause": false,
            "backButtonLabel": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Update_DCI_record_based_on_Address_proof_type_selection"
            },
            "description": null,
            "elementSubtype": null,
            "fields": [
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(35, 35, 35);\">{!LoanApplication.Loan_Number__c} : Communication Address</strong></p><p><br></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "AddAddressHeader",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"color: rgb(221, 10, 73);\">An Error Occurred:</strong></p><p><strong style=\"color: rgb(221, 10, 73);\">{!$Flow.FaultMessage}</strong></p><p><br></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "ErrorMessageAddressScreen",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "ErrorFlagToAddAddress",
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
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"color: rgb(221, 10, 73);\">Please upload an Address proof.</strong></p><p><br></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "ErrorMessageFileNotUploaded",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "FlagFileNotUploaded",
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
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"font-size: 10px; color: rgb(112, 112, 112);\">Address Type</strong></p><p><span style=\"font-size: 14px; color: rgb(35, 35, 35);\">Communication</span></p><p><br></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "AddressType",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "c:flowInputField",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "errorMessage",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Please enter more than 5 and less than 35 characters."
                                            }
                                        },
                                        {
                                            "name": "type",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "text"
                                            }
                                        },
                                        {
                                            "name": "isRequired",
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
                                        },
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Address Line 1"
                                            }
                                        },
                                        {
                                            "name": "maxAllowedLength",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 35,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "pattern",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "[a-z0-9A-Z -.,/&]{5,35}"
                                            }
                                        },
                                        {
                                            "name": "fieldValue",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "CommAddressLine_1.fieldValue",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "CommAddressLine_1",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "c:flowInputField",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "errorMessage",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Please enter more than 5 and less than 40 characters."
                                            }
                                        },
                                        {
                                            "name": "isRequired",
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
                                        },
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Address Line 2"
                                            }
                                        },
                                        {
                                            "name": "maxAllowedLength",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 40,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "fieldValue",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "CommAddLine_2.fieldValue",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "pattern",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "[a-z0-9A-Z -.,/&]{5,40}"
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "CommAddLine_2",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "c:flowInputField",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "errorMessage",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Please enter more than 5 and less than 40 characters."
                                            }
                                        },
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Address Line 3"
                                            }
                                        },
                                        {
                                            "name": "maxAllowedLength",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 40,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "fieldValue",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "CommAddressLine_3.fieldValue",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "pattern",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "[a-z0-9A-Z -.,/&]{5,40}"
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "CommAddressLine_3",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "flowruntime:lookup",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "fieldApiName",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Master_Pincode__c"
                                            }
                                        },
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Pincode"
                                            }
                                        },
                                        {
                                            "name": "objectApiName",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Address__c"
                                            }
                                        },
                                        {
                                            "name": "required",
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
                                        },
                                        {
                                            "name": "maxValues",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 1,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "PincodeMaster",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": [
                                        "TypeOfAddressProof"
                                    ],
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "Address_Proof_type",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Address Proof Type",
                                    "fieldType": "DropdownBox",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "Address_Proof_type",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "forceContent:fileUpload",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Upload Address Proof"
                                            }
                                        },
                                        {
                                            "name": "multiple",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": false,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "recordId",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "Create_Document_Checklist_Item",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "UploadAddressProof",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": null
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Add_Address_Section1_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Add_Address_Section1",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                }
            ],
            "helpText": null,
            "label": "Add Address",
            "locationX": 1161,
            "locationY": 12212,
            "name": "Add_Address",
            "nextOrFinishButtonLabel": null,
            "pauseButtonLabel": null,
            "pausedText": null,
            "processMetadataValues": [],
            "rules": [],
            "showFooter": true,
            "showHeader": false
        },
        {
            "allowBack": true,
            "allowFinish": true,
            "allowPause": false,
            "backButtonLabel": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "File_Uploaded_or_not1"
            },
            "description": null,
            "elementSubtype": null,
            "fields": [
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(35, 35, 35); font-size: 12px;\">{!LoanApplication.Loan_Number__c} : Address</strong></p><p><br></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "KYC_detalis_page",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(221, 10, 73);\">An Error Occurred:</strong></p><p><strong style=\"color: rgb(221, 10, 73);\">{!$Flow.FaultMessage}</strong></p><p><br></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "ErrorMessageKYCDetails",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "ErrorFlagToSameAsPerAddress",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(221, 10, 73); background-color: rgb(255, 255, 255);\">Please upload an Address proof.</strong></p><p><br></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "errorFileUpload",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "fileNotUploaded1",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"font-size: 10px; color: rgb(112, 112, 112); background-color: rgb(255, 255, 255);\">EKYC Permanent Address</strong></p><p><span style=\"font-size: 14px; color: rgb(35, 35, 35); background-color: rgb(255, 255, 255);\">{!AccountPrimaryApplicant.KYC_Address__c}</span></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Permanent_Address",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "SelectedProgramName",
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
                                    "stringValue": "KCC Digital"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "c:flowInputField",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "errorMessage",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Please enter more than 5 and less than 35 characters."
                            }
                        },
                        {
                            "name": "type",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "text"
                            }
                        },
                        {
                            "name": "label",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Address Line 1"
                            }
                        },
                        {
                            "name": "maxAllowedLength",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 35,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "pattern",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "[a-z0-9A-Z -.,/&]{5,35}"
                            }
                        },
                        {
                            "name": "fieldValue",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "Get_KYC_Address.addressline1",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "isRequired",
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
                        },
                        {
                            "name": "isDisabled",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "Get_KYC_Address.isAddressline1Disabled",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "KYCAddressLine_1",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "c:flowInputField",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "errorMessage",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Please enter more than 5 and less than 40 characters."
                            }
                        },
                        {
                            "name": "type",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "text"
                            }
                        },
                        {
                            "name": "label",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Address Line 2"
                            }
                        },
                        {
                            "name": "maxAllowedLength",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 40,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "fieldValue",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "Get_KYC_Address.addressline2",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "pattern",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "[a-z0-9A-Z -.,/&]{5,40}"
                            }
                        },
                        {
                            "name": "isRequired",
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
                        },
                        {
                            "name": "isDisabled",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "Get_KYC_Address.isAddressline2Disabled",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "KYCAddressLine_2",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "c:flowInputField",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "errorMessage",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Please enter more than 5 and less than 40 characters."
                            }
                        },
                        {
                            "name": "type",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "text"
                            }
                        },
                        {
                            "name": "label",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Address Line 3"
                            }
                        },
                        {
                            "name": "maxAllowedLength",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 40,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "fieldValue",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "Get_KYC_Address.addressline3",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "pattern",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "[a-z0-9A-Z -.,/&]{1,40}"
                            }
                        },
                        {
                            "name": "isDisabled",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "Get_KYC_Address.isAddressline3Disabled",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "KYCAddressLine_3",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"color: rgb(112, 112, 112); font-size: 10px;\">Pincode</strong></p><p><span style=\"font-size: 14px; color: rgb(35, 35, 35);\">{!Get_Address.PincodeNumber__c}</span></p><p><strong style=\"font-size: 10px; color: rgb(112, 112, 112);\">City</strong></p><p><span style=\"color: rgb(35, 35, 35); font-size: 14px;\">{!Get_Address.CityName__c}</span></p><p><strong style=\"color: rgb(112, 112, 112); font-size: 10px;\">State</strong></p><p><span style=\"font-size: 14px; color: rgb(35, 35, 35);\">{!Get_Address.StateName__c}</span></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "display_pincode",
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
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Address_Details_Page_Section1_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Address_Details_Page_Section1",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "1",
                        "conditions": [
                            {
                                "leftValueReference": "demographicEditableFlag",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "flowruntime:lookup",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "fieldApiName",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Master_Pincode__c"
                                            }
                                        },
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Pincode"
                                            }
                                        },
                                        {
                                            "name": "objectApiName",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Address__c"
                                            }
                                        },
                                        {
                                            "name": "maxValues",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 1,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "required",
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
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "PincodeLookup",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": null
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Address_Details_Page_Section2_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Address_Details_Page_Section2",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "demographicEditableFlag",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": [
                                        "TypeOfAddressProof"
                                    ],
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Address Proof Type",
                                    "fieldType": "DropdownBox",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "Address_Proof_Type1",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "forceContent:fileUpload",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Upload Address Proof"
                                            }
                                        },
                                        {
                                            "name": "multiple",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": false,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "recordId",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "Get_Document_Checklist_Item.Id",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "UploadAddressProof1",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": null
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Address_Details_Page_Section3_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Address_Details_Page_Section3",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "demographicEditableFlag",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": "Boolean",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": {
                        "apexValue": null,
                        "booleanValue": true,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": null,
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    },
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Communication Address same as above",
                    "fieldType": "InputField",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Communication_Address_same_as_above",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><br></p><p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(68, 68, 68);\">You will be redirected to Add a Communication Address.</strong></p><p><br></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "MessageCommAddressSame",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "Communication_Address_same_as_above",
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
                        "processMetadataValues": []
                    }
                }
            ],
            "helpText": null,
            "label": "Address Details Page",
            "locationX": 1326,
            "locationY": 10526,
            "name": "Address_Details_Page",
            "nextOrFinishButtonLabel": null,
            "pauseButtonLabel": null,
            "pausedText": null,
            "processMetadataValues": [],
            "rules": [],
            "showFooter": true,
            "showHeader": false
        },
        {
            "allowBack": false,
            "allowFinish": true,
            "allowPause": false,
            "backButtonLabel": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Increment_Masking_Counter"
            },
            "description": null,
            "elementSubtype": null,
            "fields": [
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(35, 35, 35); font-size: 12px;\">{!LoanApplication.Loan_Number__c} : Masking Status</strong></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_Head",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "c:autoRefresh",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "countDown",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 5,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "maxRefreshCount",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 5,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "refreshCount",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "AutoRefreshCounter_Masking",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Masking_AutoRefresh",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "Check_LAR_Masking_Status.Masking_Status__c",
                                "operator": "NotEqualTo",
                                "processMetadataValues": [],
                                "rightValue": {
                                    "apexValue": null,
                                    "booleanValue": null,
                                    "dateTimeValue": null,
                                    "dateValue": null,
                                    "elementReference": null,
                                    "numberValue": null,
                                    "sobjectValue": null,
                                    "stringValue": "Success"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                }
            ],
            "helpText": null,
            "label": "Check Adhaar Masking Status",
            "locationX": 1282,
            "locationY": 6056,
            "name": "Check_Adhaar_Masking_Status",
            "nextOrFinishButtonLabel": "Update Status",
            "pauseButtonLabel": null,
            "pausedText": null,
            "processMetadataValues": [],
            "rules": [],
            "showFooter": true,
            "showHeader": false
        },
        {
            "allowBack": false,
            "allowFinish": true,
            "allowPause": false,
            "backButtonLabel": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_LAR_to_Latest_Details"
            },
            "description": null,
            "elementSubtype": null,
            "fields": [
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"font-size: 10px; color: rgb(35, 35, 35);\">{!LoanApplication.Loan_Number__c} : Demographic Details</strong></p><p><strong style=\"font-size: 10px; color: rgb(0, 0, 0);\">﻿</strong></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Header_DemographicDetails",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(221, 10, 73);\">An Error Occurred:</strong></p><p><strong style=\"color: rgb(221, 10, 73);\">{!$Flow.FaultMessage}</strong></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_Fault",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "Fault_DemographicSection",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(221, 10, 73);\">Please Upload Aadhar Card</strong></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "aadhar_upload_error",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "1",
                        "conditions": [
                            {
                                "leftValueReference": "AadharDocumentUploadFlag",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": [
                                        "Title_Mr",
                                        "Title_Ms",
                                        "Title_Mrs"
                                    ],
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "AccountPrimaryApplicant.Title__c",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Title",
                                    "fieldType": "DropdownBox",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "Title",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "AccountPrimaryApplicant.KYC_First_Name__c",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "First Name",
                                    "fieldType": "InputField",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "First_Name",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "AccountPrimaryApplicant.Middle_Name__c",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Middle Name",
                                    "fieldType": "InputField",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": false,
                                    "isVisible": null,
                                    "name": "Middle_Name",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "AccountPrimaryApplicant.KYC_Last_Name__c",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Last Name",
                                    "fieldType": "InputField",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "Last_Name",
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
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Demographic_Details_Screen_Section1_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Demographic_Details_Screen_Section1",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "demographicEditableFlag",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"color: rgb(112, 112, 112); font-size: 10px;\">Title</strong></p><p><span style=\"color: rgb(35, 35, 35); font-size: 14px;\">Mr</span></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "TitleForMr",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "AccountPrimaryApplicant.KYC_Gender__c",
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
                                                    "stringValue": "M"
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": [
                                        "Title_Ms",
                                        "Title_Mrs"
                                    ],
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": "Title_Ms",
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Title",
                                    "fieldType": "DropdownBox",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": false,
                                    "isVisible": null,
                                    "name": "TitleMs",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "1 AND ( 2 OR 3 )",
                                        "conditions": [
                                            {
                                                "leftValueReference": "AccountPrimaryApplicant.KYC_Gender__c",
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
                                                    "stringValue": "F"
                                                }
                                            },
                                            {
                                                "leftValueReference": "Marital_Status",
                                                "operator": "NotEqualTo",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": null,
                                                    "numberValue": null,
                                                    "sobjectValue": null,
                                                    "stringValue": "M"
                                                }
                                            },
                                            {
                                                "leftValueReference": "Marital_Status",
                                                "operator": "IsNull",
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
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": [
                                        "Title_Ms",
                                        "Title_Mrs"
                                    ],
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": "Title_Mrs",
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Title",
                                    "fieldType": "DropdownBox",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": false,
                                    "isVisible": null,
                                    "name": "TitleMrs",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "AccountPrimaryApplicant.KYC_Gender__c",
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
                                                    "stringValue": "F"
                                                }
                                            },
                                            {
                                                "leftValueReference": "Marital_Status",
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
                                                    "stringValue": "M"
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"color: rgb(112, 112, 112); font-size: 10px;\">First Name</strong></p><p><span style=\"font-size: 14px; color: rgb(35, 35, 35);\">{!AccountPrimaryApplicant.KYC_First_Name__c}</span></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "Disp_FirstName",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"color: rgb(0, 0, 0); font-size: 10px; background-color: rgb(255, 255, 255);\">﻿</strong><strong style=\"color: rgb(112, 112, 112); font-size: 10px; background-color: rgb(255, 255, 255);\">Middle Name</strong></p><p><span style=\"font-size: 14px;\">{!AccountPrimaryApplicant.Middle_Name__c}</span></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "Disp_MiddleName",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "AccountPrimaryApplicant.Middle_Name__c",
                                                "operator": "IsNull",
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
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"font-size: 10px; color: rgb(112, 112, 112);\">Last Name</strong></p><p><span style=\"font-size: 14px; color: rgb(35, 35, 35);\">{!AccountPrimaryApplicant.KYC_Last_Name__c}</span></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "Disp_LastName",
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
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "6"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Demographic_Details_Screen_Section2_Column1",
                            "objectFieldReference": null,
                            "outputParameters": [],
                            "processMetadataValues": [],
                            "regionContainerType": null,
                            "scale": null,
                            "storeOutputAutomatically": null,
                            "validationRule": null,
                            "visibilityRule": null
                        },
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "c:flowDisplayImage",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "contentVersionId",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "AccountPrimaryApplicant.PhotoCVID__c",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "AccountPHoto",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": null
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "6"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Demographic_Details_Screen_Section2_Column2",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Demographic_Details_Screen_Section2",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "1",
                        "conditions": [
                            {
                                "leftValueReference": "demographicEditableFlag",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": [
                                        "Male",
                                        "Female"
                                    ],
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "AccountPrimaryApplicant.KYC_Gender__c",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Gender",
                                    "fieldType": "DropdownBox",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "Gender",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": "Date",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "AccountPrimaryApplicant.KYC_DOB__c",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "DOB",
                                    "fieldType": "InputField",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "DOB",
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
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Demographic_Details_Screen_Section3_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Demographic_Details_Screen_Section3",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "demographicEditableFlag",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"font-size: 10px; color: rgb(112, 112, 112);\">Gender</strong></p><p><span style=\"font-size: 14px; color: rgb(35, 35, 35);\">{!Gender_Formula}</span></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "Disp_Gender",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"font-size: 10px; color: rgb(112, 112, 112);\">DOB</strong></p><p><span style=\"color: rgb(35, 35, 35); font-size: 14px;\">{!AccountPrimaryApplicant.KYC_DOB__c}</span></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "Disp_DOB",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(112, 112, 112);\">Aadhar Ref Number </strong></p><p>{!AccountPrimaryApplicant.KYC_Aadhar_Ref_Number__c}</p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "Disp_Adhaar",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "demographicEditableFlag",
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
                                        "processMetadataValues": []
                                    }
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Demographic_Details_Screen_Section4_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Demographic_Details_Screen_Section4",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "demographicEditableFlag",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "forceContent:fileUpload",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Aadhar Card Upload"
                                            }
                                        },
                                        {
                                            "name": "multiple",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": false,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "title",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Please upload visibly clear Aadhar Card"
                                            }
                                        },
                                        {
                                            "name": "recordId",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "Get_Aadhar_Document_Checklist_Item.Id",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "fileNames",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "AadharUploadedFileNames",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "upload_unmasked_aadhar_card",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "1",
                                        "conditions": [
                                            {
                                                "leftValueReference": "demographicEditableFlag",
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
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": [
                                        "Driving_License",
                                        "Voter_ID1",
                                        "Passport"
                                    ],
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "OVD's",
                                    "fieldType": "DropdownBox",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "OVD_s",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "((1 Or 2 ) AND 6 AND 5 ) OR ((3 OR 4 ) AND 7 AND 5)",
                                        "conditions": [
                                            {
                                                "leftValueReference": "AccountPrimaryApplicant.KYC_Last_Name__c",
                                                "operator": "IsNull",
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
                                            },
                                            {
                                                "leftValueReference": "AccountPrimaryApplicant.KYC_Last_Name__c",
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
                                                    "stringValue": "."
                                                }
                                            },
                                            {
                                                "leftValueReference": "Last_Name",
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
                                            },
                                            {
                                                "leftValueReference": "Last_Name",
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
                                                    "stringValue": "."
                                                }
                                            },
                                            {
                                                "leftValueReference": "PANAvailable",
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
                                            },
                                            {
                                                "leftValueReference": "demographicEditableFlag",
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
                                            },
                                            {
                                                "leftValueReference": "demographicEditableFlag",
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
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "c:flowInputField",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "fieldValue",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "AccountPrimaryApplicant.Driving_License_Number__c",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "errorMessage",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Invalid : Driving License number length must be less than or equals to 17 characters and should not contain any special."
                                            }
                                        },
                                        {
                                            "name": "isRequired",
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
                                        },
                                        {
                                            "name": "type",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "text"
                                            }
                                        },
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Driving License"
                                            }
                                        },
                                        {
                                            "name": "pattern",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "^[a-zA-Z0-9]{12,17}"
                                            }
                                        },
                                        {
                                            "name": "maxAllowedLength",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 17,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "OVD_Driving_Lisence",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "OVD_s",
                                                "operator": "EqualTo",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": "Driving_License",
                                                    "numberValue": null,
                                                    "sobjectValue": null,
                                                    "stringValue": null
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "c:flowInputField",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "errorMessage",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Invalid: Required minimum 9 characters with first two or maximum three characters as Alphabet."
                                            }
                                        },
                                        {
                                            "name": "type",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "text"
                                            }
                                        },
                                        {
                                            "name": "isRequired",
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
                                        },
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Voter ID"
                                            }
                                        },
                                        {
                                            "name": "upperCaseAvailed",
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
                                        },
                                        {
                                            "name": "pattern",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "[A-Za-z]{2}[A-Za-z0-9]{1}[0-9]{6,}"
                                            }
                                        },
                                        {
                                            "name": "fieldValue",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "AccountPrimaryApplicant.Voter_ID__c",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "maxAllowedLength",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 25,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "minValue",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "9"
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "OVD_VoterID",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "OVD_s",
                                                "operator": "EqualTo",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": "Voter_ID1",
                                                    "numberValue": null,
                                                    "sobjectValue": null,
                                                    "stringValue": null
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "c:flowInputField",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "errorMessage",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Invalid: Required minimum 6 characters with first character as Alphabet."
                                            }
                                        },
                                        {
                                            "name": "type",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "text"
                                            }
                                        },
                                        {
                                            "name": "isRequired",
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
                                        },
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Passport"
                                            }
                                        },
                                        {
                                            "name": "upperCaseAvailed",
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
                                        },
                                        {
                                            "name": "pattern",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "^[A-Z]{1}[0-9]{6,14}$"
                                            }
                                        },
                                        {
                                            "name": "fieldValue",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "AccountPrimaryApplicant.Passport__c",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "maxAllowedLength",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 15,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "OVD_Passport",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "OVD_s",
                                                "operator": "EqualTo",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": "Passport",
                                                    "numberValue": null,
                                                    "sobjectValue": null,
                                                    "stringValue": null
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "6"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Demographic_Details_Screen_Section5_Column1",
                            "objectFieldReference": null,
                            "outputParameters": [],
                            "processMetadataValues": [],
                            "regionContainerType": null,
                            "scale": null,
                            "storeOutputAutomatically": null,
                            "validationRule": null,
                            "visibilityRule": null
                        },
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "LAR_ToUpdate.Aadhaar_UID_Optional__c",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Aadhar Number",
                                    "fieldType": "InputField",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "Aadhar_Number",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "or",
                                        "conditions": [
                                            {
                                                "leftValueReference": "demographicEditableFlag",
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
                                        "processMetadataValues": []
                                    }
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "6"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Demographic_Details_Screen_Section5_Column2",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Demographic_Details_Screen_Section5",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "SelectedProgramName",
                                "operator": "NotEqualTo",
                                "processMetadataValues": [],
                                "rightValue": {
                                    "apexValue": null,
                                    "booleanValue": null,
                                    "dateTimeValue": null,
                                    "dateValue": null,
                                    "elementReference": "KCC_Digital",
                                    "numberValue": null,
                                    "sobjectValue": null,
                                    "stringValue": null
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": "Boolean",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LAR_ToUpdate.PAN_Available__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    },
                    "description": null,
                    "extensionName": null,
                    "fieldText": "PAN Available",
                    "fieldType": "InputField",
                    "fields": [],
                    "helpText": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(68, 68, 68);\">If unselected, PAN cannot be added later.</span></p>",
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": true,
                    "isVisible": null,
                    "name": "PANAvailable",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "(1 AND 2) OR 3",
                        "conditions": [
                            {
                                "leftValueReference": "LAR_ToUpdate.FinServ__Role__c",
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
                                    "stringValue": "Primary Owner"
                                }
                            },
                            {
                                "leftValueReference": "SelectedProgramName",
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
                                    "stringValue": "KCC Digital"
                                }
                            },
                            {
                                "leftValueReference": "SelectedProgramName",
                                "operator": "NotEqualTo",
                                "processMetadataValues": [],
                                "rightValue": {
                                    "apexValue": null,
                                    "booleanValue": null,
                                    "dateTimeValue": null,
                                    "dateValue": null,
                                    "elementReference": null,
                                    "numberValue": null,
                                    "sobjectValue": null,
                                    "stringValue": "KCC Digital"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "c:flowInputField",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "errorMessage",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Please enter a valid PAN Number."
                            }
                        },
                        {
                            "name": "pattern",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "[A-Za-z]{3}[A,a,B,b,C,c,F,f,G,g,H,h,L,l,J,j,P,p,T,t,E,e]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}"
                            }
                        },
                        {
                            "name": "type",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "text"
                            }
                        },
                        {
                            "name": "isRequired",
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
                        },
                        {
                            "name": "fieldValue",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "LAR_ToUpdate.PAN__c",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "maxAllowedLength",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 10,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "label",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "PAN"
                            }
                        },
                        {
                            "name": "upperCaseAvailed",
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
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "PAN_Input",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "or",
                        "conditions": [
                            {
                                "leftValueReference": "PANAvailable",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": [
                        "ChoiceSet_MaritalStatus"
                    ],
                    "dataType": "String",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "AccountPrimaryApplicant.Marital__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    },
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Marital Status",
                    "fieldType": "DropdownBox",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Marital_Status",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "flowruntime:email",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "value",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "AccountPrimaryApplicant.Email__c",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Email_Input",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": "String",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "AccountPrimaryApplicant.Mobile_No__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    },
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Contact No.",
                    "fieldType": "InputField",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Contact_No",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "demographicEditableFlag",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(112, 112, 112); font-size: 10px; background-color: rgb(255, 255, 255);\">Contact No.</strong></p><p><span style=\"font-size: 14px; color: rgb(35, 35, 35);\">{!AccountPrimaryApplicant.Mobile_No__c}</span></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_Contact",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "1",
                        "conditions": [
                            {
                                "leftValueReference": "demographicEditableFlag",
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
                        "processMetadataValues": []
                    }
                }
            ],
            "helpText": null,
            "label": "Demographic Details Screen",
            "locationX": 1326,
            "locationY": 2852,
            "name": "Demographic_Details_Screen",
            "nextOrFinishButtonLabel": null,
            "pauseButtonLabel": null,
            "pausedText": null,
            "processMetadataValues": [],
            "rules": [],
            "showFooter": true,
            "showHeader": false
        },
        {
            "allowBack": true,
            "allowFinish": true,
            "allowPause": false,
            "backButtonLabel": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Check_Father_or_Spouse_Name"
            },
            "description": null,
            "elementSubtype": null,
            "fields": [
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(35, 35, 35);\">{!LoanApplication.Loan_Number__c} : Other Details</strong></p><p><br></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Header_OtherDetails",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(221, 10, 73);\">An Error Occurred:</strong></p><p><strong style=\"color: rgb(221, 10, 73);\">{!$Flow.FaultMessage}</strong></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_FaultOtherScreen",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "Fault_OtherDetails",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(221, 10, 73);\">There must be atleast one Co-Applicant present.</strong></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "errorText",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "noCoapplicantAdded",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "c:flowInputField",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "errorMessage",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Please Enter valid Name"
                            }
                        },
                        {
                            "name": "isRequired",
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
                        },
                        {
                            "name": "label",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Mother's Name"
                            }
                        },
                        {
                            "name": "pattern",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "^[A-Z][a-zA-Z]*( [a-zA-Z]+)*$"
                            }
                        },
                        {
                            "name": "fieldValue",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "AccountPrimaryApplicant.Mother_s_Name__c",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "maxAllowedLength",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 40,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "MotherName",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": [
                        "ChoiceSet_RelativeIndicator"
                    ],
                    "dataType": "String",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "AccountPrimaryApplicant.Relative_Indicator__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    },
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Relative Indicator",
                    "fieldType": "DropdownBox",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Relative_Indicator",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "c:flowInputField",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "pattern",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "^[A-Z][a-zA-Z]*( [a-zA-Z]+)*$"
                            }
                        },
                        {
                            "name": "label",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Relative's Name"
                            }
                        },
                        {
                            "name": "isRequired",
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
                        },
                        {
                            "name": "errorMessage",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Please Enter valid Name"
                            }
                        },
                        {
                            "name": "maxAllowedLength",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 40,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "fieldValue",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "AccountPrimaryApplicant.Father_Spouce_Name__c",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "RelativeName",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": [
                        "Branch_ChoiceSet"
                    ],
                    "dataType": "String",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Get_Branch_Default_Value.Branch_Master__c",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    },
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Branch",
                    "fieldType": "DropdownBox",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Branch",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__Role__c",
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
                                    "stringValue": "Primary Owner"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": "Number",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Distance_To_Customer_Residence_In_kms",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    },
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Distance To Customer Residence (In kms)",
                    "fieldType": "InputField",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Distance_To_Customer_Residence_In_kms",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": 0,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__Role__c",
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
                                    "stringValue": "Primary Owner"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": "Number",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Residence_Vintage_In_years",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    },
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Residence Vintage (In years)",
                    "fieldType": "InputField",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Residence_Vintage_In_years",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": 0,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__Role__c",
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
                                    "stringValue": "Primary Owner"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": [
                        "IncomeRange_Upto100000",
                        "IncomeRange_1To2Point5",
                        "IncomeRange_2Point5To5",
                        "IncomeRange_MoreThan5"
                    ],
                    "dataType": "String",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "Income_Range",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    },
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Income Range",
                    "fieldType": "DropdownBox",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Income_Range",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": [
                        "ApplicantReligion"
                    ],
                    "dataType": "String",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Religion",
                    "fieldType": "DropdownBox",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Religion",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": [
                        "ApplicantCast"
                    ],
                    "dataType": "String",
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "Caste",
                    "fieldType": "DropdownBox",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Cast",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": [
                                        "KacchaHouse",
                                        "PakkaHouse",
                                        "SemiPakkaHouse"
                                    ],
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "House_Residence_Type",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "House-Residence Type",
                                    "fieldType": "DropdownBox",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "House_Residence_Type",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__Role__c",
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
                                                    "stringValue": "Primary Owner"
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": [
                                        "HouseOwnershipAssetChoice"
                                    ],
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "Ownership_Type",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Ownership Type",
                                    "fieldType": "DropdownBox",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "Ownership_Type",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__Role__c",
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
                                                    "stringValue": "Primary Owner"
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": [
                                        "relationshipWithApplicant"
                                    ],
                                    "dataType": "String",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": "Relationship_with_Applicant",
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Relationship with Applicant",
                                    "fieldType": "DropdownBox",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "Relationship_with_Applicant",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "Get_All_LAR_s_whose_EKYC_is_pending.FinServ__Role__c",
                                                "operator": "NotEqualTo",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": null,
                                                    "numberValue": null,
                                                    "sobjectValue": null,
                                                    "stringValue": "Primary Owner"
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": "Boolean",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": false,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "Opt for Super Protect Credit",
                                    "fieldType": "InputField",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "Opt_for_Super_Protect_Credit",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "RoleOptedForSuperProtect.Id",
                                                "operator": "IsNull",
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
                                            },
                                            {
                                                "leftValueReference": "SelectedProgramName",
                                                "operator": "NotEqualTo",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": null,
                                                    "numberValue": null,
                                                    "sobjectValue": null,
                                                    "stringValue": "KCC Digital"
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Other_Details_Screen_Section1_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Other_Details_Screen_Section1",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "LoanApplication.FinServ__RecordTypeName__c",
                                "operator": "NotEqualTo",
                                "processMetadataValues": [],
                                "rightValue": {
                                    "apexValue": null,
                                    "booleanValue": null,
                                    "dateTimeValue": null,
                                    "dateValue": null,
                                    "elementReference": null,
                                    "numberValue": null,
                                    "sobjectValue": null,
                                    "stringValue": "KCC Digital"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "runtime_industries_lending:flowButton",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "buttonLabel",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Add Co-Applicant"
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Add_CoApplicant",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": null
                }
            ],
            "helpText": null,
            "label": "Other Details Screen",
            "locationX": 2019,
            "locationY": 13484,
            "name": "Other_Details_Screen",
            "nextOrFinishButtonLabel": null,
            "pauseButtonLabel": null,
            "pausedText": null,
            "processMetadataValues": [],
            "rules": [],
            "showFooter": true,
            "showHeader": false
        },
        {
            "allowBack": false,
            "allowFinish": true,
            "allowPause": false,
            "backButtonLabel": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Increment_OVD_Refresh_Counter"
            },
            "description": null,
            "elementSubtype": null,
            "fields": [
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(35, 35, 35);\">{!LoanApplication.Loan_Number__c} : OVDs</strong></p><p><br></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Header_OVD",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(221, 10, 73);\">An Error Occurred:</strong></p><p><strong style=\"color: rgb(221, 10, 73);\">{!$Flow.FaultMessage}</strong></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_FaultOVD",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "Fault_OVDScreen",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(221, 10, 73);\">Please Upload PAN Document</strong></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_FileUloadError",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "ShowPANFileUploadErrorMsg",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(112, 112, 112);\">Aadhar Ref Number</strong></p><p><span style=\"background-color: rgb(255, 255, 255); font-size: 14px; color: rgb(35, 35, 35);\">{!AccountPrimaryApplicant.KYC_Aadhar_Ref_Number__c}</span></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_AdhaarRefNo",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(112, 112, 112); font-size: 10px; background-color: rgb(255, 255, 255);\">Adhaar Seeding</strong></p><p><span style=\"font-size: 14px; color: rgb(35, 35, 35);\">{!AdhaarStatusDisplayFormula}</span></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_AdhaarSeedingStatus",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "LAR_ToUpdate.Integration_Staus_PAN__c",
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
                                    "stringValue": "Success"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(112, 112, 112); font-size: 10px; background-color: rgb(255, 255, 255);\">PAN Number</strong></p><p><span style=\"color: rgb(35, 35, 35); font-size: 14px;\">{!LAR_ToUpdate.PAN__c}</span></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_PanNumber",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(112, 112, 112);\">Name Match</strong></p><p><span style=\"font-size: 14px; color: rgb(35, 35, 35);\">{!LAR_ToUpdate.Karza_Match_Percentage__c} %</span></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_NameMatch",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                                "operator": "IsNull",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(112, 112, 112);\">Karza Status</strong></p><p><span style=\"color: rgb(35, 35, 35); font-size: 14px;\">{!LAR_ToUpdate.Karza_Status__c} : {!LAR_ToUpdate.Karza_Error__c}</span></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Karzastatus",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "or",
                        "conditions": [
                            {
                                "leftValueReference": "LAR_ToUpdate.Karza_Status__c",
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
                                    "stringValue": "In Progress"
                                }
                            },
                            {
                                "leftValueReference": "LAR_ToUpdate.Karza_Status__c",
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
                                    "stringValue": "Error"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "forceContent:fileUpload",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "label",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Upload PAN"
                                            }
                                        },
                                        {
                                            "name": "multiple",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": false,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "recordId",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "Get_PAN_Document_Checklist_Item.Id",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "UploadPAN",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                                                "operator": "LessThan",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": null,
                                                    "numberValue": 70,
                                                    "sobjectValue": null,
                                                    "stringValue": null
                                                }
                                            },
                                            {
                                                "leftValueReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                                                "operator": "IsNull",
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
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": "Boolean",
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": {
                                        "apexValue": null,
                                        "booleanValue": false,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": null
                                    },
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "I here by declare that I have seen and verified the uploaded PAN Document.",
                                    "fieldType": "InputField",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "Karza_Declaration",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": {
                                        "errorMessage": "<p>Please select PAN declaration</p>",
                                        "formulaExpression": "{!Karza_Declaration} == true"
                                    },
                                    "visibilityRule": null
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "OVD_Details_Screen_Section1_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "OVD_Details_Screen_Section1",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                                "operator": "LessThan",
                                "processMetadataValues": [],
                                "rightValue": {
                                    "apexValue": null,
                                    "booleanValue": null,
                                    "dateTimeValue": null,
                                    "dateValue": null,
                                    "elementReference": null,
                                    "numberValue": 70,
                                    "sobjectValue": null,
                                    "stringValue": null
                                }
                            },
                            {
                                "leftValueReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                                "operator": "IsNull",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "c:autoRefresh",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "countDown",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 5,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "maxRefreshCount",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": 5,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "refreshCount",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": "OVD_RefreshCounter",
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": null
                            }
                        },
                        {
                            "name": "autoRefreshText",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Validate PAN & Run Karza"
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "OVD_AutoRefresh",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "or",
                        "conditions": [
                            {
                                "leftValueReference": "LAR_ToUpdate.PAN_Status__c",
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
                                    "stringValue": "In Progress"
                                }
                            },
                            {
                                "leftValueReference": "LAR_ToUpdate.Karza_Status__c",
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
                                    "stringValue": "In Progress"
                                }
                            },
                            {
                                "leftValueReference": "LAR_ToUpdate.Karza_Status__c",
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
                                    "stringValue": "Not Started"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "runtime_industries_lending:flowButton",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "buttonLabel",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Validate PAN & Run Karza"
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "Validate_PAN",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "1 AND (2 OR 3)",
                        "conditions": [
                            {
                                "leftValueReference": "OVD_RefreshCounter",
                                "operator": "GreaterThanOrEqualTo",
                                "processMetadataValues": [],
                                "rightValue": {
                                    "apexValue": null,
                                    "booleanValue": null,
                                    "dateTimeValue": null,
                                    "dateValue": null,
                                    "elementReference": null,
                                    "numberValue": 5,
                                    "sobjectValue": null,
                                    "stringValue": null
                                }
                            },
                            {
                                "leftValueReference": "LAR_ToUpdate.Integration_Staus_PAN__c",
                                "operator": "NotEqualTo",
                                "processMetadataValues": [],
                                "rightValue": {
                                    "apexValue": null,
                                    "booleanValue": null,
                                    "dateTimeValue": null,
                                    "dateValue": null,
                                    "elementReference": null,
                                    "numberValue": null,
                                    "sobjectValue": null,
                                    "stringValue": "Success"
                                }
                            },
                            {
                                "leftValueReference": "LAR_ToUpdate.Karza_Match_Percentage__c",
                                "operator": "IsNull",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "runtime_industries_lending:flowButton",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "buttonLabel",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Next"
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "nextButton1",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "LAR_ToUpdate.Integration_Staus_PAN__c",
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
                                    "stringValue": "Success"
                                }
                            },
                            {
                                "leftValueReference": "LAR_ToUpdate.Karza_Status__c",
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
                                    "stringValue": "Success"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                }
            ],
            "helpText": null,
            "label": "OVD Details Screen",
            "locationX": 842,
            "locationY": 8246,
            "name": "OVD_Details_Screen",
            "nextOrFinishButtonLabel": null,
            "pauseButtonLabel": null,
            "pausedText": null,
            "processMetadataValues": [],
            "rules": [],
            "showFooter": false,
            "showHeader": false
        },
        {
            "allowBack": false,
            "allowFinish": true,
            "allowPause": false,
            "backButtonLabel": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Get_LA_RM_Details"
            },
            "description": null,
            "elementSubtype": null,
            "fields": [
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"color: rgb(221, 10, 73);\">An Error Occurred:</strong></p><p><strong style=\"color: rgb(221, 10, 73);\">{!$Flow.FaultMessage}</strong></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp_Fault1",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "Fault_DemographicSection",
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
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong>Case No. - {!LoanApplication.Loan_Number__c} has been moved to RM.</strong></p><p><strong>Please click on Finish to navigate to Home screen.</strong></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "Disp1",
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
            "label": "SKip KYC Scren",
            "locationX": 1348,
            "locationY": 1322,
            "name": "SKip_KYC_Scren",
            "nextOrFinishButtonLabel": null,
            "pauseButtonLabel": null,
            "pausedText": null,
            "processMetadataValues": [],
            "rules": [],
            "showFooter": true,
            "showHeader": false
        },
        {
            "allowBack": false,
            "allowFinish": true,
            "allowPause": false,
            "backButtonLabel": null,
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "Next_Prcoess"
            },
            "description": null,
            "elementSubtype": null,
            "fields": [
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": "<p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(35, 35, 35); font-size: 10px;\">{!LoanApplication.Loan_Number__c} : KYC</strong></p><p><br></p>",
                    "fieldType": "DisplayText",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": null,
                    "isVisible": null,
                    "name": "EKYCHeader",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": null
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "runtime_industries_lending:flowButton",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "buttonLabel",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Proceed with EKYC"
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "RM_EKYC",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "runtime_industries_lending:flowButton",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "buttonLabel",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Proceed with Physical KYC"
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "RMSkipEKYC",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "UserProfile",
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
                                                    "stringValue": "Relationship Manager"
                                                }
                                            },
                                            {
                                                "leftValueReference": "SelectedProgramName",
                                                "operator": "NotEqualTo",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": null,
                                                    "numberValue": null,
                                                    "sobjectValue": null,
                                                    "stringValue": "KCC Digital"
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Waiting_for_EKYC_Section1_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Waiting_for_EKYC_Section1",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "UserProfile",
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
                                    "stringValue": "Relationship Manager"
                                }
                            },
                            {
                                "leftValueReference": "ShowRMEKYCSection",
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
                            },
                            {
                                "leftValueReference": "SelectedProgramName",
                                "operator": "NotEqualTo",
                                "processMetadataValues": [],
                                "rightValue": {
                                    "apexValue": null,
                                    "booleanValue": null,
                                    "dateTimeValue": null,
                                    "dateValue": null,
                                    "elementReference": null,
                                    "numberValue": null,
                                    "sobjectValue": null,
                                    "stringValue": "KCC Digital"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": null,
                    "fieldText": null,
                    "fieldType": "RegionContainer",
                    "fields": [
                        {
                            "choiceReferences": null,
                            "dataType": null,
                            "dataTypeMappings": [],
                            "defaultSelectedChoiceReference": null,
                            "defaultValue": null,
                            "description": null,
                            "extensionName": null,
                            "fieldText": null,
                            "fieldType": "Region",
                            "fields": [
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p><strong style=\"color: rgb(75, 181, 67); font-size: 12px; background-color: rgb(255, 255, 255);\">OTP has been validated successfully.</strong></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "OTPSuccess",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "LAR_ToUpdate.FinServ__Role__c",
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
                                                    "stringValue": "Primary Owner"
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": null,
                                    "fieldText": "<p style=\"text-align: center;\"><span style=\"background-color: rgb(255, 255, 255); font-size: 12px; color: rgb(68, 68, 68);\">Please navigate to SO app and enter </span><strong style=\"background-color: rgb(255, 255, 255); font-size: 12px; color: rgb(68, 68, 68);\">\"</strong><strong style=\"background-color: rgb(255, 255, 255); color: rgb(68, 68, 68);\">{!LoanApplication.Loan_Number__c}\"</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(68, 68, 68);\"> </span><span style=\"background-color: rgb(255, 255, 255); color: rgb(68, 68, 68); font-size: 12px;\">value there for \"EKYC\".</span></p>",
                                    "fieldType": "DisplayText",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [],
                                    "inputsOnNextNavToAssocScrn": null,
                                    "isRequired": null,
                                    "isVisible": null,
                                    "name": "Display_message",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": null,
                                    "validationRule": null,
                                    "visibilityRule": null
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "c:autoRefresh",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "countDown",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 5,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "maxRefreshCount",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 10,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "showAutoRefresh",
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
                                        },
                                        {
                                            "name": "refreshCount",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": "CounterOne",
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        },
                                        {
                                            "name": "startAfterTime",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": 10000,
                                                "sobjectValue": null,
                                                "stringValue": null
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "AutoRefresh",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "AccountPrimaryApplicant.FinServ__KYCStatus__c",
                                                "operator": "NotEqualTo",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": null,
                                                    "numberValue": null,
                                                    "sobjectValue": null,
                                                    "stringValue": "Success"
                                                }
                                            },
                                            {
                                                "leftValueReference": "CounterOne",
                                                "operator": "LessThan",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": null,
                                                    "numberValue": 10,
                                                    "sobjectValue": null,
                                                    "stringValue": null
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                },
                                {
                                    "choiceReferences": null,
                                    "dataType": null,
                                    "dataTypeMappings": [],
                                    "defaultSelectedChoiceReference": null,
                                    "defaultValue": null,
                                    "description": null,
                                    "extensionName": "runtime_industries_lending:flowButton",
                                    "fieldText": null,
                                    "fieldType": "ComponentInstance",
                                    "fields": [],
                                    "helpText": null,
                                    "inputParameters": [
                                        {
                                            "name": "buttonLabel",
                                            "processMetadataValues": [],
                                            "value": {
                                                "apexValue": null,
                                                "booleanValue": null,
                                                "dateTimeValue": null,
                                                "dateValue": null,
                                                "elementReference": null,
                                                "numberValue": null,
                                                "sobjectValue": null,
                                                "stringValue": "Assign Case to RM"
                                            }
                                        }
                                    ],
                                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                                    "isRequired": true,
                                    "isVisible": null,
                                    "name": "AssignCaseToRM",
                                    "objectFieldReference": null,
                                    "outputParameters": [],
                                    "processMetadataValues": [],
                                    "regionContainerType": null,
                                    "scale": null,
                                    "storeOutputAutomatically": true,
                                    "validationRule": null,
                                    "visibilityRule": {
                                        "conditionLogic": "and",
                                        "conditions": [
                                            {
                                                "leftValueReference": "SelectedProgramName",
                                                "operator": "NotEqualTo",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": null,
                                                    "numberValue": null,
                                                    "sobjectValue": null,
                                                    "stringValue": "KCC Digital"
                                                }
                                            },
                                            {
                                                "leftValueReference": "CounterOne",
                                                "operator": "GreaterThanOrEqualTo",
                                                "processMetadataValues": [],
                                                "rightValue": {
                                                    "apexValue": null,
                                                    "booleanValue": null,
                                                    "dateTimeValue": null,
                                                    "dateValue": null,
                                                    "elementReference": null,
                                                    "numberValue": 10,
                                                    "sobjectValue": null,
                                                    "stringValue": null
                                                }
                                            },
                                            {
                                                "leftValueReference": "UserProfile",
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
                                                    "stringValue": "Canvasser Profile"
                                                }
                                            }
                                        ],
                                        "processMetadataValues": []
                                    }
                                }
                            ],
                            "helpText": null,
                            "inputParameters": [
                                {
                                    "name": "width",
                                    "processMetadataValues": [],
                                    "value": {
                                        "apexValue": null,
                                        "booleanValue": null,
                                        "dateTimeValue": null,
                                        "dateValue": null,
                                        "elementReference": null,
                                        "numberValue": null,
                                        "sobjectValue": null,
                                        "stringValue": "12"
                                    }
                                }
                            ],
                            "inputsOnNextNavToAssocScrn": null,
                            "isRequired": false,
                            "isVisible": null,
                            "name": "Waiting_for_EKYC_Section2_Column1",
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
                    "inputParameters": [],
                    "inputsOnNextNavToAssocScrn": null,
                    "isRequired": false,
                    "isVisible": null,
                    "name": "Waiting_for_EKYC_Section2",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": "SectionWithoutHeader",
                    "scale": null,
                    "storeOutputAutomatically": null,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "or",
                        "conditions": [
                            {
                                "leftValueReference": "ShowRMEKYCSection",
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
                            },
                            {
                                "leftValueReference": "UserProfile",
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
                                    "stringValue": "Canvasser Profile"
                                }
                            },
                            {
                                "leftValueReference": "SelectedProgramName",
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
                                    "stringValue": "KCC Digital"
                                }
                            },
                            {
                                "leftValueReference": "UserProfile",
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
                                    "stringValue": "System Administrator"
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                },
                {
                    "choiceReferences": null,
                    "dataType": null,
                    "dataTypeMappings": [],
                    "defaultSelectedChoiceReference": null,
                    "defaultValue": null,
                    "description": null,
                    "extensionName": "runtime_industries_lending:flowButton",
                    "fieldText": null,
                    "fieldType": "ComponentInstance",
                    "fields": [],
                    "helpText": null,
                    "inputParameters": [
                        {
                            "name": "buttonLabel",
                            "processMetadataValues": [],
                            "value": {
                                "apexValue": null,
                                "booleanValue": null,
                                "dateTimeValue": null,
                                "dateValue": null,
                                "elementReference": null,
                                "numberValue": null,
                                "sobjectValue": null,
                                "stringValue": "Next"
                            }
                        }
                    ],
                    "inputsOnNextNavToAssocScrn": "UseStoredValues",
                    "isRequired": true,
                    "isVisible": null,
                    "name": "NextButton",
                    "objectFieldReference": null,
                    "outputParameters": [],
                    "processMetadataValues": [],
                    "regionContainerType": null,
                    "scale": null,
                    "storeOutputAutomatically": true,
                    "validationRule": null,
                    "visibilityRule": {
                        "conditionLogic": "and",
                        "conditions": [
                            {
                                "leftValueReference": "AccountPrimaryApplicant.FinServ__KYCStatus__c",
                                "operator": "NotEqualTo",
                                "processMetadataValues": [],
                                "rightValue": {
                                    "apexValue": null,
                                    "booleanValue": null,
                                    "dateTimeValue": null,
                                    "dateValue": null,
                                    "elementReference": null,
                                    "numberValue": null,
                                    "sobjectValue": null,
                                    "stringValue": "Success"
                                }
                            },
                            {
                                "leftValueReference": "CounterOne",
                                "operator": "GreaterThanOrEqualTo",
                                "processMetadataValues": [],
                                "rightValue": {
                                    "apexValue": null,
                                    "booleanValue": null,
                                    "dateTimeValue": null,
                                    "dateValue": null,
                                    "elementReference": null,
                                    "numberValue": 10,
                                    "sobjectValue": null,
                                    "stringValue": null
                                }
                            }
                        ],
                        "processMetadataValues": []
                    }
                }
            ],
            "helpText": null,
            "label": "Waiting for  EKYC",
            "locationX": 1744,
            "locationY": 998,
            "name": "Waiting_for_EKYC",
            "nextOrFinishButtonLabel": null,
            "pauseButtonLabel": null,
            "pausedText": null,
            "processMetadataValues": [],
            "rules": [],
            "showFooter": false,
            "showHeader": false
        }
    ],
    "sourceTemplate": null,
    "start": {
        "connector": {
            "isGoTo": null,
            "processMetadataValues": [],
            "targetReference": "EKYC_Initiated_Update"
        },
        "description": null,
        "doesRequireRecordChangedToMeetCriteria": null,
        "elementSubtype": null,
        "filterFormula": null,
        "filterLogic": null,
        "filters": [],
        "label": null,
        "locationX": 1200,
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
    "status": "Active",
    "steps": [],
    "subflows": [
        {
            "connector": {
                "isGoTo": null,
                "processMetadataValues": [],
                "targetReference": "SKip_KYC_Scren"
            },
            "description": null,
            "elementSubtype": null,
            "flowName": "Assign_to_RM",
            "inputAssignments": [
                {
                    "name": "recordId",
                    "processMetadataValues": [],
                    "value": {
                        "apexValue": null,
                        "booleanValue": null,
                        "dateTimeValue": null,
                        "dateValue": null,
                        "elementReference": "LoanApplication.Id",
                        "numberValue": null,
                        "sobjectValue": null,
                        "stringValue": null
                    }
                }
            ],
            "label": "Assign Case to Rm",
            "locationX": 1348,
            "locationY": 1214,
            "name": "Assign_Case_to_RmSubFlow",
            "outputAssignments": [],
            "processMetadataValues": [],
            "storeOutputAutomatically": null
        }
    ],
    "textTemplates": [],
    "timeZoneSidKey": null,
    "transforms": [],
    "triggerOrder": null,
    "urls": null,
    "variables": [
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "AadharDocumentUploadFlag",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
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
        },
        {
            "apexClass": null,
            "dataType": "String",
            "description": null,
            "isCollection": true,
            "isInput": false,
            "isOutput": false,
            "name": "AadharUploadedFileNames",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "SObject",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "AccountPrimaryApplicant",
            "objectType": "Account",
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "Number",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "AutoRefreshCounter_Masking",
            "objectType": null,
            "processMetadataValues": [],
            "scale": 0,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": 0,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "String",
            "description": null,
            "isCollection": true,
            "isInput": false,
            "isOutput": false,
            "name": "AvailableAccountNames",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "String",
            "description": null,
            "isCollection": true,
            "isInput": false,
            "isOutput": false,
            "name": "AvailableLARandAccountIds",
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
            "name": "bureauInitiated",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
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
        },
        {
            "apexClass": null,
            "dataType": "SObject",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "CoAppAccountVariable",
            "objectType": "Account",
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "Number",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "Counter1",
            "objectType": null,
            "processMetadataValues": [],
            "scale": 0,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": 1,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Number",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "CounterOne",
            "objectType": null,
            "processMetadataValues": [],
            "scale": 0,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": 1,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Number",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "countOfLARRecords",
            "objectType": null,
            "processMetadataValues": [],
            "scale": 0,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": 0,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "SObject",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "currentItemFromSourceCollection",
            "objectType": "FinServ__IdentificationDocument__c",
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "String",
            "description": null,
            "isCollection": false,
            "isInput": true,
            "isOutput": false,
            "name": "CurrentRecordId",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": "This flag if for changing variations of demographic inputs from readonly to editable",
            "isCollection": false,
            "isInput": true,
            "isOutput": true,
            "name": "demographicEditableFlag",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "ErrorFlagToAddAddress",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "ErrorFlagToCreateApplicant",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "ErrorFlagToSameAsPerAddress",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "Fault_DemographicSection",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "Fault_OtherDetails",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "Fault_OVDScreen",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "fileNotUploaded1",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "FlagFileNotUploaded",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": true,
            "name": "FlagToCreateApplicant",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "FlagToSelectApplicant",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "SObject",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "Flowpicklistvalues",
            "objectType": "Flow_Picklist_Fields__mdt",
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "Is_Click_for_Add_more_address",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "SObject",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "LAR_ToUpdate",
            "objectType": "FinServ__FinancialAccountRole__c",
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "String",
            "description": null,
            "isCollection": true,
            "isInput": false,
            "isOutput": false,
            "name": "LARAccountIds",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "Number",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "LARcount",
            "objectType": null,
            "processMetadataValues": [],
            "scale": 0,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": 0,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "SObject",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "LoanApplication",
            "objectType": "FinServ__FinancialAccount__c",
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "noCoapplicantAdded",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Number",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "OVD_RefreshCounter",
            "objectType": null,
            "processMetadataValues": [],
            "scale": 0,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": 1,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "String",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "PanCardvariable",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "RetriggerKarzaNsdlAPI",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "SObject",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "RoleOptedForSuperProtect",
            "objectType": "FinServ__FinancialAccountRole__c",
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "String",
            "description": null,
            "isCollection": false,
            "isInput": true,
            "isOutput": false,
            "name": "SelectedLARandAccountId",
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
            "isInput": true,
            "isOutput": false,
            "name": "SelectedProgramName",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": null,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": "KCC Digital"
            }
        },
        {
            "apexClass": null,
            "dataType": "String",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "SequenceNo",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": null
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "ShowPANFileUploadErrorMsg",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
                "apexValue": null,
                "booleanValue": false,
                "dateTimeValue": null,
                "dateValue": null,
                "elementReference": null,
                "numberValue": null,
                "sobjectValue": null,
                "stringValue": null
            }
        },
        {
            "apexClass": null,
            "dataType": "Boolean",
            "description": null,
            "isCollection": false,
            "isInput": false,
            "isOutput": false,
            "name": "ShowRMEKYCSection",
            "objectType": null,
            "processMetadataValues": [],
            "scale": null,
            "value": {
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
    "waits": []
}

export default flowSampleMetadata;