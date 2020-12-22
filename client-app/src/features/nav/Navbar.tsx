import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface IProps {
  openCreateForm: () => void;
}

export const Navbar = ({openCreateForm}: IProps) => {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
            Reactivities
          </Menu.Item>
            <Menu.Item
              name='activities'
            >
              Activities
            </Menu.Item>

            <Menu.Item
              name='createActivities'
            >
              <Button positive content='Create Activities' onClick={openCreateForm} />
            </Menu.Item>
      </Container>
      </Menu>
    )
}
