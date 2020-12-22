import React, { FormEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import {v4 as uuid} from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
}

export const ActivityForm = ({setEditMode, createActivity, editActivity, activity: initialFormState}: IProps) => {

    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            }
        }
    }

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleSubmit = () => {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity)
        } else {
            editActivity(activity);
        }
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setActivity({...activity, [name]: value});
    }

    return (
       <Segment clearing>
           <Form onSubmit={handleSubmit}>
               <Form.Input placeholder='Title' value={activity.title} onChange={handleInputChange} name='title' />
               <Form.TextArea rows={2} placeholder='Description' value={activity.description} onChange={handleInputChange} name='description' />
               <Form.Input placeholder='Venue' value={activity.venue} onChange={handleInputChange} name='venue' />
               <Form.Input placeholder='City' value={activity.city} onChange={handleInputChange} name='city' />
               <Form.Input placeholder='Category' value={activity.category} onChange={handleInputChange} name='category' />
               <Form.Input type='datetime-local' placeholder='Date' value={activity.date} onChange={handleInputChange} name='date' />
                <Button basic color='blue' positive content='Submit' />
                <Button basic content='Cancel' onClick={() => setEditMode(false)}/>
           </Form>
       </Segment>
    )
}
