export default function Validate(values){
    let errors = {};
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //name
    if(!values.name.trim()){
        errors.name = "Type your name here, please"
    }
    else if(values.name.length<3){
        errors.name = "The name is too short"
    }

    //Email
    if(!values.email){
        errors.email = "Type your email here, please"
    }
    else if (!pattern.test(values.email)) {
        errors.email = 'The email is not valid';
    }

    //phone
    if(!values.phone){
        errors.phone = "Type number phone here, please"
    }
    else if(values.phone[0] === 1 && values.phone[1] === 5){
        errors.phone = "Type a number phone without 15"
    }

    //comment
    if(!values.comment.trim()){
        errors.comment = "Write a message here, please"
    }

    return errors;
}