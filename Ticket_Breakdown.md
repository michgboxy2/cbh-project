# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Task 1:

i) add a new column in the Agents table in the databse and store the custom Id assigned by facilities.

Acceptance criteria:
- The cusatom Id should be added to the Agent table withoud affecting the primary key Agent Id.

- The Custom Id should accept null values incase the facility dooesn't set a custom Id.


Implementation details:
- Run a migration on the Agents table and add the facility customId
- Update the Agent model in the application and include the customId property.

Time estimate: 2hrs.

Task 2:
i) Update the function getShiftsByFacility to include the facility customId when defined.

Acceptance criteria:
- The function getShiftsByFacility should return the facility customId of the agent if it is defined and full back to 'not set'(when being rendered) if not defined.

- The getShiftsByFacility function should return the customId as part of agent metadata.

Implementation Details:
- Update the getShiftsByFacility function to include the customId of the Agent in the list of shifts data returned.

- Use the JOIN keyword in the SQL query to join the Agents and Shifts tables and select the customId column from the Agents table.

- Index the customId field for faster query response.

Time estimate: 1hr.

