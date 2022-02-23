$('#step_form').steps(
    {
        // startAt: 2
        // showBackButton: false
        // showFooterButtons: false
        // onChange: function() {console.log("Changed")}
        onFinish: ()=>{console.log('finished')}
    }
);
// https://oguzhanoya.github.io/jquery-steps
// here onChange is mentioned in events but not working