#### Federated Identity pattern 
Delegate authentication to an external identity provider. This can simplify development, minimize the requirement for user administration, and improve the user experience of the application.

Users typically need to work with multiple applications provided and hosted by different organizations they have a business relationship with. These users might be required to use specific (and different) credentials for each one. This can:

1. Cause a disjointed user experience. Users often forget sign-in credentials when they have many different ones.

2. Expose security vulnerabilities. When a user leaves the company the account must immediately be deprovisioned. It's easy to overlook this in large organizations.

3. Complicate user management. Administrators must manage credentials for all of the users, and perform additional tasks such as providing password reminders.

4. Users typically prefer to use the same credentials for all these applications.

##### Solution
Implement an authentication mechanism that can use federated identity. Separate user authentication from the application code, and delegate authentication to a trusted identity provider. 

This can simplify development and allow users to authenticate using a wider range of identity providers (IdP) while minimizing the administrative overhead. 

It also allows you to clearly decouple authentication from authorization.