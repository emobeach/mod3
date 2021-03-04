import React, {useEffect, useState} from 'react';
import axios from 'axios';
const BASE_URL = 'localhost:5432/thoughts/'


function Thoughts(){
    const [thoughts, setThoughts] = useState(null);

    async function getThoughts(){
        try {
            const res = await axios.get(BASE_URL)
            setThoughts(res.data)
        } catch(e) {
            console.error(e, e.message);
        }
    }

    useEffect(() => {
        getThoughts()
    }, [])

    const [selectedThought, setSelectedThought] = useState(null)

    function selectThought(thought, e) {
        e.preventDefault();
        setSelectedThought(thought);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setSelectedThought({...selectedThought, [name]: value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        createThought()
    }

    async function createThought() {
        try {
            const res = await axios.post(BASE_URL, selectedThought)
            setThoughts([res.data])
        } catch(e) {
            console.error(e, e.message)
        }
    }

    async function editThought(e) {
        e.preventDefault();
        try {
            const res = await axios.patch(BASE_URL, selectedThought)
            getThoughts()
        } catch(e) {
            console.error(e, e.message)
        }
    }

    async function deleteThought(thoughtId, e) {
        e.preventDefault();
        try {
            const res = await axios.delete(BASE_URL + thoughtId)
            getThoughts();
        } catch(e) {
            console.error(e, e.message);
        }
    }

    return(
        <div>
            {selectedThought && <form
                className='thought-form'
                onChange={ (e) => handleChange(e)}
                onSubmit={ (e) => handleSubmit(e)}>

                <label>
                    Title:
                    <input type='text' name='title' defaultValue = {selectedThought.thought}/>
                    Date:
                    <input type='text' name='date' defaultValue = {selectedThought.date}/>
                    Mood:
                    <input type='text' name='mood' defaultValue = {selectedThought.mood}/>
                </label>
                <input type='submit' value='Edit Thought' className = 'editThought' />        
            </form>
            }
            {thoughts && thoughts.map(thought => <Thought thought={thought} selectedThought = {selectThought} deleteThought = {deleteThought} key= {thought.id}/>)}

        </div>
    )
}

function Thought({thought, deleteThought, selectThought}){
    return(
        <div key={thought.id}>
            <div>{thought.title}</div>
            <div>{thought.date}</div>
            <div>{thought.mood}</div>
            <button onClick={ (e) => selectThought(thought, e) }>Edit</button>
            <button onClick={ (e) => deleteThought(thought.id, e)}>Delete</button>
        </div>
    )
}

export default Thoughts
