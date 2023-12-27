import flowSampleMetadata from "./samples/flowImport.js";
const nodesNotAllowed = ["choices","constants","dynamicChoiceSets","formulas","environments","processMetadataValues","variables"];
const nodesAllowed = ["actionCalls","assignments","decisions","recordCreates","recordDeletes","recordLookups","recordUpdates","screens","start","subflows"];

console.log(flowSampleMetadata);

