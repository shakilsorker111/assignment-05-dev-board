

// document.getElementById('upper-div-date').innerText = 




    // card-1
document.getElementById('card-btn-1').addEventListener('click', function(){
    alert('Board Successfully Updated');
    const assignedValue = document.getElementById('task-assigned').innerText;
    const convertedAssignedValue = parseInt(assignedValue)
    const updatedAssignedValue = convertedAssignedValue - 1;
    document.getElementById('task-assigned').innerText = updatedAssignedValue;

    const taskCount = document.getElementById('task-count').innerText;
    const convertedTaskCount = parseInt(taskCount);
    const updatedTaskCount = convertedTaskCount + 1;
    document.getElementById('task-count').innerText = updatedTaskCount;
    document.getElementById('card-btn-1').classList.add('bg-blue-200');
    document.getElementById('card-btn-1').disabled = true;
    
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="p-3 bg-[#F4F7FF] rounded-lg">
                    <p class="text-base">You have Complete The Task Fix Mobile Button Issue at 12:48:15 PM</p>
                </div>
    `;

    document.getElementById('right-activity-div').appendChild(div);
});


// card-2
document.getElementById('card-btn-2').addEventListener('click', function(){
    alert('Board Successfully Updated');
    const assignedValue = document.getElementById('task-assigned').innerText;
    const convertedAssignedValue = parseInt(assignedValue)
    const updatedAssignedValue = convertedAssignedValue - 1;
    document.getElementById('task-assigned').innerText = updatedAssignedValue;

    const taskCount = document.getElementById('task-count').innerText;
    const convertedTaskCount = parseInt(taskCount);
    const updatedTaskCount = convertedTaskCount + 1;
    document.getElementById('task-count').innerText = updatedTaskCount;
    document.getElementById('card-btn-2').classList.add('bg-blue-200');
    document.getElementById('card-btn-2').disabled = true;
    
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="p-3 bg-[#F4F7FF] rounded-lg">
                    <p class="text-base">You have Complete The Task Add Dark Mode at 12:48:15 PM</p>
                </div>
    `;

    document.getElementById('right-activity-div').appendChild(div);
});


// card-3
document.getElementById('card-btn-3').addEventListener('click', function(){
    alert('Board Successfully Updated');
    const assignedValue = document.getElementById('task-assigned').innerText;
    const convertedAssignedValue = parseInt(assignedValue)
    const updatedAssignedValue = convertedAssignedValue - 1;
    document.getElementById('task-assigned').innerText = updatedAssignedValue;

    const taskCount = document.getElementById('task-count').innerText;
    const convertedTaskCount = parseInt(taskCount);
    const updatedTaskCount = convertedTaskCount + 1;
    document.getElementById('task-count').innerText = updatedTaskCount;
    document.getElementById('card-btn-3').classList.add('bg-blue-200');
    document.getElementById('card-btn-3').disabled = true;
    
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="p-3 bg-[#F4F7FF] rounded-lg">
                    <p class="text-base">You have Complete The Task Optimize  Home page at 12:48:15 PM</p>
                </div>
    `;

    document.getElementById('right-activity-div').appendChild(div);
});


// card-4
document.getElementById('card-btn-4').addEventListener('click', function(){
    alert('Board Successfully Updated');
    const assignedValue = document.getElementById('task-assigned').innerText;
    const convertedAssignedValue = parseInt(assignedValue)
    const updatedAssignedValue = convertedAssignedValue - 1;
    document.getElementById('task-assigned').innerText = updatedAssignedValue;

    const taskCount = document.getElementById('task-count').innerText;
    const convertedTaskCount = parseInt(taskCount);
    const updatedTaskCount = convertedTaskCount + 1;
    document.getElementById('task-count').innerText = updatedTaskCount;
    document.getElementById('card-btn-4').classList.add('bg-blue-200');
    document.getElementById('card-btn-4').disabled = true;
    
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="p-3 bg-[#F4F7FF] rounded-lg">
                    <p class="text-base">You have Complete The Task Add new emoji 🤲 at 12:48:15 PM</p>
                </div>
    `;

    document.getElementById('right-activity-div').appendChild(div);
});


// card-5
document.getElementById('card-btn-5').addEventListener('click', function(){
    alert('Board Successfully Updated');
    const assignedValue = document.getElementById('task-assigned').innerText;
    const convertedAssignedValue = parseInt(assignedValue)
    const updatedAssignedValue = convertedAssignedValue - 1;
    document.getElementById('task-assigned').innerText = updatedAssignedValue;

    const taskCount = document.getElementById('task-count').innerText;
    const convertedTaskCount = parseInt(taskCount);
    const updatedTaskCount = convertedTaskCount + 1;
    document.getElementById('task-count').innerText = updatedTaskCount;
    document.getElementById('card-btn-5').classList.add('bg-blue-200');
    document.getElementById('card-btn-5').disabled = true;
    
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="p-3 bg-[#F4F7FF] rounded-lg">
                    <p class="text-base">You have Complete The Task Integrate OpenAI API at 12:48:15 PM</p>
                </div>
    `;

    document.getElementById('right-activity-div').appendChild(div);
});


// card-6
document.getElementById('card-btn-6').addEventListener('click', function(){
    alert('Board Successfully Updated');
    const assignedValue = document.getElementById('task-assigned').innerText;
    const convertedAssignedValue = parseInt(assignedValue)
    const updatedAssignedValue = convertedAssignedValue - 1;
    document.getElementById('task-assigned').innerText = updatedAssignedValue;

    const taskCount = document.getElementById('task-count').innerText;
    const convertedTaskCount = parseInt(taskCount);
    const updatedTaskCount = convertedTaskCount + 1;
    document.getElementById('task-count').innerText = updatedTaskCount;
    document.getElementById('card-btn-6').classList.add('bg-blue-200');
    document.getElementById('card-btn-6').disabled = true;
    
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="p-3 bg-[#F4F7FF] rounded-lg">
                    <p class="text-base">You have Complete The Task Improve Job searching at 12:48:15 PM</p>
                </div>
    `;

    document.getElementById('right-activity-div').appendChild(div);
});





    // right side activity log - clear history button
document.getElementById('clear-history-btn').addEventListener('click', function(){
    document.getElementById('right-activity-div').innerHTML = ``;
})






// Discover Something New Today
document.getElementById('discover-div').addEventListener('click', function(){
    window.location.href = 'discover.html';
});







// main nav right btn
function getColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

    document.getElementById('main-nav-right-btn').addEventListener('click', function(){
        document.body.style.backgroundColor = getColor();
    });