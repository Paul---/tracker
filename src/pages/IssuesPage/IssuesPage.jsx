import React from 'react';
import IssuesList from '../../components/IssuesComponents/IssuesList/IssuesList';
import IssuesListItem from '../../components/IssuesComponents/IssuesListItem/IssuesListItem';

const testIssuesArr = [
  { id: 654, severity: 'High', details: 'Super bad bug discovered' },
  { id: 6544, severity: 'Med', details: 'Super bad Med bug discovered' },
  { id: 6543, severity: 'Low', details: 'Super Low bug discovered' },
  { id: 6542, severity: 'High', details: 'Super High bug discovered' }
];
export default function IssuesPage() {
  return (
    <>
      <IssuesList>
        <h1>Issues List</h1>
        <IssuesListItem />
      </IssuesList>
    </>
  );
}
