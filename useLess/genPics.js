

const base_url = "http://127.0.0.1:5000/"



function create_Task(){
    jQuery.ajax({
        url:`${base_url}createTask`,
        type:'GET',
        async:false,
        crossDomain:true,
        complete: function(response) {
            if(response.status === 200 && response.readyState === 4){
                var taskId = response.responseJSON.id
                return taskId
            }else{
                console.log(response.status)
                return false
            }
        }
    });
}



function genArt(taskId,keyword){
    jQuery.ajax({
        url:`${base_url}createArt?taskId=${taskId}&keyword=${keyword}`,
        type:'GET',
        async:false,
        crossDomain:true,
        complete: function(response) {
            if(response.status === 200 && response.readyState === 4){
                console.log(response.responseJSON)
            }else{
                console.log(response.status)
            }
        }
    });
}


function getArt(taskId){
    jQuery.ajax({
        url:`${base_url}getArt?taskId=${taskId}`,
        type:'GET',
        async:false,
        crossDomain:true,
        complete: function(response) {
            if(response.status === 200 && response.readyState === 4){
                console.log(response.responseJSON)
            }else{
                console.log(response.status)
            }
        }
    });
}

// create_Task()
// genArt('cat')
// getArt()