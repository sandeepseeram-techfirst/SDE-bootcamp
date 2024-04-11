#### Bulkhead Pattern 

The Bulkhead pattern is a type of application design that is tolerant of failure.
In a bulkhead architecture, also known as cell-based architecture, elements of an application are isolated into pools so that if one fails, the others will continue to function. 

 It's named after the sectioned partitions (bulkheads) of a ship's hull. If the hull of a ship is compromised, only the damaged section fills with water, which prevents the ship from sinking.

##### Solution
Partition service instances into different groups, based on consumer load and availability requirements. This design helps to isolate failures, and allows you to sustain service functionality for some consumers, even during a failure.