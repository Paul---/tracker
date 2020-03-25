import React from 'react';
import IssuesList from '../../components/IssuesComponents/IssuesList/IssuesList';
import ListItem from '../../components/ListItem/ListItem';

const testIssuesArr = [
  { id: 654, priority: 'High', message: 'Super bad bug discovered' },
  { id: 6544, priority: 'Med', message: 'Super bad Med bug discovered' },
  { id: 6543, priority: 'Low', message: 'Super Low bug discovered' },
  { id: 6542, priority: 'High', message: 'Super High bug discovered' }
];
export default function IssuesPage() {
  return (
    <>
      <IssuesList>
        {testIssuesArr.map(el => {
         return <ListItem
            key={el.id}
            id={el.id}
            priority={el.priority}
            message={el.message}
          />;
        })}
      </IssuesList>
    </>
  );
}
