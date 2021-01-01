var submit = document.getElementById('add');
var listItems = document.getElementById('items');
var clr = document.getElementById('clear');
submit.addEventListener('click', addList);

listItems.addEventListener('click', checkOrDel);
clr.addEventListener('click', clrList);


function addList(e)
{
    // --- Creating list and adding to list items ---
     
    e.preventDefault();
    var li = document.createElement('li');

    var newList = document.getElementById('item').value;
    if (newList!=="")
    
    {  
        e.preventDefault();
        li.className = 'list-group-item';
        
        li.appendChild(document.createTextNode(newList));
        //console.log(li);
            
        listItems.appendChild(li);
        
        // --- Delete button ---
        var del = document.createElement('button');

        del.className = 'btn btn-danger btn-sm float-right delete';

        del.appendChild(document.createTextNode('X'));

        li.appendChild(del);

        // --- Check Button ---
        var chk = document.createElement('button');

        chk.className = 'btn btn-success btn-sm float-right check';

        chk.appendChild(document.createTextNode('Check'));

        li.appendChild(chk);
    }
    else
    {
        alert("Please input something!")
    }
}

function checkOrDel(e){

     if (e.target.classList.contains('delete'))
     {
            if (confirm('Are You Sure?'))
            {
             var li = e.target.parentElement;
             listItems.removeChild(li);
            }

     }
    

    else 
        {
            var li = e.target.parentElement;
             li.style.backgroundColor = '#66ff66';
            //li2.classList.add('bg-success');
       }
}
function clrList(e)
{
     //listItems.style.display= 'none';
    e.preventDefault();
    var lis = document.querySelectorAll('#items li');
    for(var i=0; li=lis[i]; i++) 
    {
        li.parentNode.removeChild(li);
    }
     
}
