$(document).ready(function(){
    //add the navbar in <head>//
    const Header = document.createElement('header');
    // console.log(Header);
    const textinfo = ['Acme Layout', 'Users', 'Departmments', 'Contact'];
    // console.log(P);
    for (let i = 0; i < 4; i++){
        const P = document.createElement('p');
        P.textContent = textinfo[i];
        Header.append(P);
    }
    $('body').prepend(Header);

    //set the first paragraph with User
    const headtext = document.createElement('h1');
    headtext.setAttribute('id', 'para1')
    headtext.innerText = 'Users';
    $(headtext).insertAfter(document.getElementsByTagName('header'))

    //create the box for user registration
    const div_for_registration = document.createElement('div');
    div_for_registration.setAttribute('id', 'registerbox')
    $(div_for_registration).insertAfter(document.getElementsByTagName('h1'));

    //add information into the register box
    const boxname = document.createElement('h2');
    boxname.innerText = 'Creat A User';
    //console.log(boxname)
    $('#registerbox').append(boxname)

    const formbox = document.createElement('form');
    $(formbox).insertAfter($('h2'))

    const firstnamelabel = document.createElement('label')
    firstnamelabel.setAttribute('for', 'firstname');
    firstnamelabel.innerText = 'First Name';
    $('form').append(firstnamelabel);
    const firstname = document.createElement('input');
    firstname.setAttribute('type', 'text');
    firstname.setAttribute('id', 'FN');
    firstname.setAttribute('name', 'firstname');
    //console.log(firstname)
    $('form').append(firstname);

    $('form').append('<br><br>');

    const lastnamelabel = document.createElement('label')
    lastnamelabel.setAttribute('for', 'lastname');
    lastnamelabel.innerText = 'Last Name';
    $('form').append(lastnamelabel);
    const lastname = document.createElement('input');
    lastname.setAttribute('type', 'text');
    lastname.setAttribute('id', 'LN');
    lastname.setAttribute('name', 'lastname');
    //console.log(firstname)
    $('form').append(lastname);

    $('form').append('<br><br>');

    const dpmtlabel = document.createElement('label')
    dpmtlabel.setAttribute('for', 'department');
    dpmtlabel.innerText = 'Department';
    $('form').append(dpmtlabel);
    const selectbox = document.createElement('select');
    selectbox.setAttribute('name', 'department');
    selectbox.setAttribute('id', 'DPMT');
    $('form').append(selectbox);

    const optioninfo = ['--None--', 'CS', 'MSE', 'EE'];
    for (let i = 0; i < 4; i++){
        const optionlabel = document.createElement('option');
        optionlabel.innerText = optioninfo[i];
        $('#DPMT').append(optionlabel);
    }

    $('form').append('<br><br>');

    const clearbutton = document.createElement('button');
    clearbutton.innerText = 'Clear';
    $('form').append(clearbutton);

    const submitbutton = document.createElement('button');
    submitbutton.innerText = 'Submit';
    $('form').append(submitbutton);

    const usercard = document.createElement('div');
    usercard.setAttribute('id', 'usercard');
    $(usercard).insertAfter($('#registerbox'));

    const userinformation = {
        'Alpha1' : 'Alpha is from department of Computer Science and pursuing his master degree.',
        'Alpha2' : 'Alpha is from department of Computer Science and pursuing his master degree.',
        'Alpha3' : 'Alpha is from department of Computer Science and pursuing his master degree.',
        'Apha4' : 'Alpha is from department of Computer Science and pursuing his master degree.',
        'Alpha5' : 'Alpha is from department of Computer Science and pursuing his master degree.',
        'Alpha6' : 'Alpha is from department of Computer Science and pursuing his master degree.',
        'Alpha7' : 'Alpha is from department of Computer Science and pursuing his master degree.',
    }

    function addsuerinfo(element, info){
        Object.keys(info).forEach(
            (item)=>{
                const userprofile = document.createElement('div');
                userprofile.setAttribute('class', 'userprofile');
                userprofile.setAttribute('id', item);
                element.append(userprofile);
                const username = document.createElement('p');
                username.setAttribute('class', 'username');
                username.innerText = item;
                element.find(`#${item}`).append(username);
                const userdescription = document.createElement('p');
                userdescription.setAttribute('class', 'userdescription');
                userdescription.innerText = info[item];
                element.find(`#${item}`).append(userdescription);
            }
        )
    }
    
addsuerinfo($('#usercard'), userinformation);    

})