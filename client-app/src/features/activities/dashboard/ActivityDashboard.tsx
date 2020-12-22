import React from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { ActivityForm } from '../form/ActivityForm'
import { ActivityDetails } from './ActivityDetails'
import { ActivityList } from './ActivityList'

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity : (activity: IActivity | null) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity: (id: string) => void;
}
  export const ActivityDashboard = ({activities, selectActivity, selectedActivity, setSelectedActivity, editMode, setEditMode, createActivity, editActivity, deleteActivity}: IProps) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && <ActivityDetails activity={selectedActivity} setEditMode={setEditMode} setSelectedActivity={setSelectedActivity} />}
                {editMode && <ActivityForm key={selectedActivity ? selectedActivity.id : 0 }setEditMode={setEditMode} activity={selectedActivity!} createActivity={createActivity} editActivity={editActivity} />}
            </Grid.Column>
        </Grid>
    )
}
