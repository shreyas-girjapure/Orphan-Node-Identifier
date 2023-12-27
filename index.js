import flowSampleMetadata from "./samples/flowImport.js";
import { removeKeysFromObject } from "./transformationUtilities/utils.js";

const nodesNotAllowed = ["choices","constants","dynamicChoiceSets","formulas","environments","processMetadataValues","variables","apexPluginCalls","collectionProcessors","description","interviewLabel","isAdditionalPermissionRequiredToRun","isOverridable","isTemplate","loops","migratedFromWorkflowRuleName","orchestratedStages","overriddenFlow","processType","recordRollbacks","runInMode","sourceTemplate","startElementReference","status","steps","textTemplates","timeZoneSidKey","transforms","triggerOrder","urls","waits"];

const nodesAllowed = ["actionCalls","assignments","decisions","recordCreates","recordDeletes","recordLookups","recordUpdates","screens","start","subflows"];


let flowNode = removeKeysFromObject(flowSampleMetadata,nodesNotAllowed);
console.log(flowNode);

