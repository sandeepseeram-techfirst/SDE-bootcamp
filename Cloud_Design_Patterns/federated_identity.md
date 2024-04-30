#### Federated Identity Pattern 
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

The trusted identity providers include corporate directories, on-premises federation services, other security token services (STS) provided by business partners, or social identity providers that can authenticate users who have, for example, a Microsoft, Google, Yahoo!, or Facebook account.

Federated Identity pattern is when a client application needs to access a service that requires authentication. The authentication is performed by an IdP that works in concert with an STS. The IdP issues security tokens that provide information about the authenticated user. This information, referred to as claims, includes the user's identity, and might also include other information such as role membership and more granular access rights.

This model is often called claims-based access control. Applications and services authorize access to features and functionality based on the claims contained in the token. 

The service that requires authentication must trust the IdP. The client application contacts the IdP that performs the authentication. If the authentication is successful, the IdP returns a token containing the claims that identify the user to the STS (note that the IdP and STS can be the same service). The STS can transform and augment the claims in the token based on predefined rules, before returning it to the client. The client application can then pass this token to the service as proof of its identity.

Federated authentication provides a standards-based solution to the issue of trusting identities across diverse domains, and can support single sign-on. This type of authentication is becoming more common across all types of applications, especially cloud-hosted applications, because it supports single sign-on without requiring a direct network connection to identity providers. The user doesn't have to enter credentials for every application. 
This increases security because it prevents the creation of credentials required to access many different applications, and it also hides the user's credentials from all but the original identity provider. Applications see just the authenticated identity information contained within the token.

Federated identity also has the major advantage that management of the identity and credentials is the responsibility of the identity provider. The application or service doesn't need to provide identity management features. In addition, in corporate scenarios, the corporate directory doesn't need to know about the user if it trusts the identity provider. This removes all the administrative overhead of managing the user identity within the directory.
