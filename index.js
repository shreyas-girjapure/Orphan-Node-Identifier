import flowSampleMetadata from "./samples/flowImport.js";
import { removeKeysFromObject } from "./transformationUtilities/utils.js";

const nodesNotAllowed = ["choices", "constants", "dynamicChoiceSets", "formulas", "environments", "processMetadataValues", "variables", "apexPluginCalls", "collectionProcessors", "description", "interviewLabel", "isAdditionalPermissionRequiredToRun", "isOverridable", "isTemplate", "loops", "migratedFromWorkflowRuleName", "orchestratedStages", "overriddenFlow", "processType", "recordRollbacks", "runInMode", "sourceTemplate", "startElementReference", "status", "steps", "textTemplates", "timeZoneSidKey", "transforms", "triggerOrder", "urls", "waits"];


let flowNode = removeKeysFromObject(flowSampleMetadata, nodesNotAllowed);

function analyzeFlowNodes(flowNode) {
    let entriesOfFlowNode = Object.entries(flowNode);
    let countOfNodeVsIncomingNode = {};

    for (let [key, value] of entriesOfFlowNode) {

        if (key === "decisions") {      
            Array.from(value).forEach(item => {
                let targetRefName = item?.defaultConnector?.targetReference;
                let nodeName = item?.name;

                let listOfRules = item?.rules;
                Array.from(listOfRules).forEach(item => {
                    let ruleRefName = item?.connector?.targetReference;
                    if (countOfNodeVsIncomingNode.hasOwnProperty(ruleRefName)) {
                        countOfNodeVsIncomingNode[ruleRefName] = countOfNodeVsIncomingNode[ruleRefName] + 1;
                    } else {
                        countOfNodeVsIncomingNode[ruleRefName] = 0;
                    }
                })

                if (countOfNodeVsIncomingNode.hasOwnProperty(nodeName)) {
                    countOfNodeVsIncomingNode[nodeName] = countOfNodeVsIncomingNode[nodeName] + 1;
                } else {
                    countOfNodeVsIncomingNode[nodeName] = 0;
                }

                if (countOfNodeVsIncomingNode.hasOwnProperty(targetRefName)) {
                    countOfNodeVsIncomingNode[targetRefName] = countOfNodeVsIncomingNode[targetRefName] + 1;
                } else {
                    countOfNodeVsIncomingNode[targetRefName] = 0;
                }

            })
        }

        if (Array.isArray(value)) {
            Array.from(value).forEach(item => {
                let targetRefName = item?.connector?.targetReference;
                let nodeName = item?.name;

                if (countOfNodeVsIncomingNode.hasOwnProperty(nodeName)) {
                    countOfNodeVsIncomingNode[nodeName] = countOfNodeVsIncomingNode[nodeName] + 1;
                } else {
                    countOfNodeVsIncomingNode[nodeName] = 0;
                }

                if (countOfNodeVsIncomingNode.hasOwnProperty(targetRefName)) {
                    countOfNodeVsIncomingNode[targetRefName] = countOfNodeVsIncomingNode[targetRefName] + 1;
                } else {
                    countOfNodeVsIncomingNode[targetRefName] = 0;
                }

            })
        }

        if (value.constructor.name === "Object") {
            let targetRefName = value?.connector?.targetReference;
            if (countOfNodeVsIncomingNode.hasOwnProperty(targetRefName)) {
                countOfNodeVsIncomingNode[targetRefName] = countOfNodeVsIncomingNode[targetRefName] + 1;
            } else {
                countOfNodeVsIncomingNode[targetRefName] = 0;
            }
        }

    }

    return countOfNodeVsIncomingNode;
}

let countSample = analyzeFlowNodes(flowNode);

console.log(countSample);
