function removeKeysFromObject(objectToRemoveFrom, arrayOfKeysToBeRemoved) {
    if (!objectToRemoveFrom || !arrayOfKeysToBeRemoved) {
        return;
    }
    Array.from(arrayOfKeysToBeRemoved).forEach(item => {
        delete objectToRemoveFrom[item];
    })
    return objectToRemoveFrom;
}

export { removeKeysFromObject }