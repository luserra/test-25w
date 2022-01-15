import {useState, useEffect} from 'react';

const ValidateForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
    });

    const [errors,setErrors] = useState({});
    const[isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){            
            var boton = document.getElementsByClassName('form-input-btn')[0];
            var spin = document.getElementsByClassName('spinner_boton')[0];
            boton.setAttribute('disabled',true);
            var myHeaders = new Headers();
            myHeaders.append("content-type", "application/x-www-form-urlencoded");
            const contact={};
    
            var urlencoded = new URLSearchParams();
            urlencoded.append("name", values.name);
            urlencoded.append("email", values.email);
            urlencoded.append("phone", values.phone);
            urlencoded.append("message", values.comment);
            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
            };

            fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result)).then(callback())
            .catch(error => console.log('error', error));
        };
    });

    return {handleChange, values, handleSubmit, errors }
}

export default ValidateForm