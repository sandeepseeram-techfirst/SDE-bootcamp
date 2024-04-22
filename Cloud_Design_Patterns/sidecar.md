#### Sidecar Pattern 
Deploy components of an application into a separate process or container to provide isolation and encapsulation. This pattern can also enable applications to be composed of heterogeneous components and technologies.

This pattern is named Sidecar because it resembles a sidecar attached to a motorcycle. In the pattern, the sidecar is attached to a parent application and provides supporting features for the application. 
The sidecar also shares the same lifecycle as the parent application, being created and retired alongside the parent. 

The sidecar pattern is sometimes referred to as the sidekick pattern and is a decomposition pattern.

##### Solution
Co-locate a cohesive set of tasks with the primary application, but place them inside their own process or container, providing a homogeneous interface for platform services across languages.

A sidecar service isn't necessarily part of the application, but is connected to it.