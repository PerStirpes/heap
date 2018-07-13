# References

1. 
2. 
3. 
4.
[Snapshots: Track Rich Data Without Writing Code](https://heapanalytics.com/blog/company/snapshots-track-rich-data-without-writing-code)

[Snapshot](https://docs.heapanalytics.com/docs/snapshots)

[Naturebox customer stories](https://heapanalytics.com/customer-stories/naturebox)
[Codeless Analytics From Atttribution to Conversions](http://marketing.heapanalytics.com/ecommerce/shopify)

5. 

I think all of the data is up and running for our account and we’ve finished our implementation! Now we just need to finalize the model for lead source attribution using this data. As a refresher, we want to attribute leads across 3 equally weighted touches across:

First Touch: First event recorded 
Account Creation: First time a customer completes their account 
First Order: First time a customer completes their order 

For all of these, I imagine we will want to pull the UTM from the session where the event occurred. Is that the correct approach? 

Where I'm running into trouble is in identifying where in our SQL database I should actually query the data. There aren't many fields available in the 'all_events' Heap table and I don’t get the difference between the all_events tables and the individual event table in Heap SQL. Where should I find this data?

Assuming I want to keep our attribution model simple, could you help me write a SQL query that equally weights attribution by UTM source for these events or at least point me in the right direction of what I’d need to do to start building this out?

