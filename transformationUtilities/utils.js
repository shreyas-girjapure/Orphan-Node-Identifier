const nodesNotAllowed = ["choices", "constants", "dynamicChoiceSets", "formulas", "environments", "processMetadataValues", "variables", "apexPluginCalls", "collectionProcessors", "description", "interviewLabel", "isAdditionalPermissionRequiredToRun", "isOverridable", "isTemplate", "migratedFromWorkflowRuleName", "orchestratedStages", "overriddenFlow", "processType", "recordRollbacks", "runInMode", "sourceTemplate", "startElementReference", "status", "steps", "textTemplates", "timeZoneSidKey", "transforms", "triggerOrder", "urls", "waits"];

function removeKeysFromObject(objectToRemoveFrom, arrayOfKeysToBeRemoved) {
    if (!objectToRemoveFrom || !arrayOfKeysToBeRemoved) {
        return;
    }
    Array.from(arrayOfKeysToBeRemoved).forEach(item => {
        delete objectToRemoveFrom[item];
    })
    return objectToRemoveFrom;
}


export { removeKeysFromObject, nodesNotAllowed }