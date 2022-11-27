// ProcessImageUpload/index.js

module.exports = async function (context) {

    try {
        context.log("Blob:", context.bindingData.blobTrigger);

        const bloburi=context.bindingData.uri;
        context.log("Blob URI:", bloburi);

        context.bindings.outQueue = {"task": (Math.floor(Math.random()*10)+1)%2+1, "url": bloburi};

    } catch (err) {
        context.log(err);
        return;
    }

};