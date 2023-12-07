export const convertSpecificationData = (obj) => {
    const specificationArray = Object.entries(obj)
        .map(([specificationName, specification]) => ({
            specificationName,
            specification: Object.entries(specification)?.map(([featureName, feature]) => ({
                featureName, feature
            })),
        }));

    return specificationArray
}