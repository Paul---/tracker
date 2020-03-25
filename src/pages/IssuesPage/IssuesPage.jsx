import React from 'react';
import IssuesList from '../../components/IssuesComponents/IssuesList/IssuesList';
import ListItem from '../../components/ListItem/ListItem';
import { Jumbotron } from 'react-bootstrap';

const testIssuesArr = [
  {
    id: 654,
    priority: 'High',
    message: 'Super bad bug discovered',
    createdOn: '2200,03,20'
  },
  {
    id: 6544,
    priority: 'Med',
    message: 'Super bad Med bug discovered',
    createdOn: '2200,03,20'
  },
  {
    id: 6543,
    priority: 'Low',
    message: 'Super Low bug discovered',
    createdOn: '2200,03,20'
  },
  {
    id: 6542,
    priority: 'High',
    message: 'Super High bug discovered',
    createdOn: '2200,03,20'
  }
];
export default function IssuesPage() {
  return (
    <Jumbotron fluid>
      <IssuesList>
        {testIssuesArr.map(el => {
          return (
            <ListItem
              key={el.id}
              id={el.id}
              priority={el.priority}
              message={el.message}
              createdOn={el.createdOn}
            />
          );
        })}
      </IssuesList>
    </Jumbotron>
  );
}
