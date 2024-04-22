#### Rate Limiting Pattern 

Many services use a throttling pattern to control the resources they consume, imposing limits on the rate at which other applications or services can access them. You can use a rate limiting pattern to help you avoid or minimize throttling errors related to these throttling limits and to help you more accurately predict throughput.

A rate limiting pattern is appropriate in many scenarios, but it is particularly helpful for large-scale repetitive automated tasks such as batch processing.

Performing large numbers of operations using a throttled service can result in increased traffic and throughput, as you'll need to both track rejected requests and then retry those operations. 

##### Solution
Rate limiting can reduce your traffic and potentially improve throughput by reducing the number of records sent to a service over a given period of time. 

A service may throttle based on different metrics over time, such as:

1. The number of operations (for example, 20 requests per second).
2. The amount of data (for example, 2 GiB per minute).
3. The relative cost of operations (for example, 20,000 RUs per second).

Regardless of the metric used for throttling, your rate limiting implementation will involve controlling the number and/or size of operations sent to the service over a specific time period, optimizing your use of the service while not exceeding its throttling capacity.

In scenarios where your APIs can handle requests faster than any throttled ingestion services allow, you'll need to manage how quickly you can use the service. However, only treating the throttling as a data rate mismatch problem, and simply buffering your ingestion requests until the throttled service can catch up, is risky. If your application crashes in this scenario, you risk losing any of this buffered data.