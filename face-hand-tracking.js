// console.log(handTrack);

const canvas = document.querySelector('#mycanvas');
const video = document.querySelector('#myvideo')

let model;

const options = {
    // flipHorizonal: false,
    maxNumBoxes: 3,
    scoreThreshold: 0.7,

}

let context = canvas.getContext("2d")

handTrack.load(options).then((modelData)=>{
    model = modelData;
    console.log(model);

    //webカメラ起動

    handTrack.startVideo(video).then((status)=>{
        if(status){
            console.log(status)
            startDetection();
        }else{
            console.log("false");
        }
    })
});

const startDetection = () =>{
    model.detect(video).then((predictions)=>{
        model.renderPredictions(predictions,canvas,context,video);

        requestAnimationFrame(startDetection);
    })
}

