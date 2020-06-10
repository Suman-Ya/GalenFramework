rule("%{objectPattern} are equally distant from each other", function (objectName, parameters) {
    // Searching for all objects with user-defined pattern
    var allObjects = findAll(parameters.objectPattern);

    if (allObjects.length > 1) {
        var distance = allObjects[1].left() - allObjects[0].right();
        for (var i = 0; i < allObjects.length - 1; i++) {
            var nextObject = allObjects[i + 1];

            this.addObjectSpecs(allObjects[i].name, [
                "near " + allObjects[i + 1].name + " " + distance + " px left"
            ]);
        }
    } else {
        throw new Error("Not enough objects for pattern: " + parameters.objectPattern);
    }
});