# References

* [video behavioral attribution](https://heap.wistia.com/medias/gnf4oz3thy)
* [video Spotlight on Defining Events](https://heap.wistia.com/medias/5wd4zq7gj1)
### sql
[Heap SQL: Common Queries](https://docs.heapanalytics.com/docs/heap-sql-common-queries)
[Heap SQL: Attribution](https://docs.heapanalytics.com/docs/heap-sql-attribution)
[Multi Touch Attribution](https://docs.heapanalytics.com/docs/heap-sql-attribution#section-multi-touch-attribution)
[Heap SQL: Funnel Analysis](https://docs.heapanalytics.com/v1.0/docs/heap-sql-funnel-analysis)


# 1. 

> We are setting up Segments and need to specify only traffic which come from Google Adwords and not Google organic search. 
Can you please explain in detail, how we can just track users through a segment, who have come from any Google Adwords campaign?
We need to set this up urgently, so your detailed explanation would be really appreciated.




### Increase Product Engagement & Retention with Dynamic Cohorting
Create segments of users by filtering for real time behavior and historical actions. Combine user activity with user attributes like vertical, contract value, first touch attribution, and more to create complex personas in your analysis.

Track product engagement and feature adoption over time to determine which features deprioritize
Optimize for LTV, not just acquisition
Measure retention across user segments

[Adwords: Manual and Auto Tagging Best Practices](https://docs.heapanalytics.com/docs/manual-and-autotagging-for-adwords)
[How can I differentiate between organic and paid searches?](https://docs.heapanalytics.com/docs/understand-attribution#section-how-can-i-differentiate-between-organic-and-paid-searches-)

# 2. 
> When I view a funnel of people who view our app homepage and click “send email”, I see that roughly 1,500 users in the past month clicked the send email button. However, when I go to the Events tab and view the latter event by itself, it tells me there has been over 2,000 occurrences in the past week. Given that it's impossible to click the send email button without viewing it on the console homepage, could you please explain to me why the funnel over the past month shows that only 1500 people have clicked button over the past month, but the event tab shows that there's been 2000+ occurrences of the event over the past week?

[Funnel](https://docs.heapanalytics.com/docs/funnel)

### Increase Conversion Rate
Funnels lets you see every action before a conversion: identify drop-off, decrease friction, and improve your site's conversion rate.

Compare funnels across different user segments, device types, or attribution channels
Measure the effectiveness of your A/B tests – automatically capture experimentation variation data, device type, ad campaigns, and more


# 3. 
> I was doing some analysis recently on our sign up conversion (see attached image) but I’m getting push back from my boss that these numbers must be wrong. According to this graph, I’m seeing that we only had 2 users come in from AdRoll during this time period but I’m being told that AdRoll is saying there were at least 10x that many users during this time period. We’re in the process of re-evaluating our retargeting spend in advance of our board meeting and I’d really like to know what’s going on and make sure other people can trust Heap. Is there something that I might not be thinking about?

[Funnel](https://docs.heapanalytics.com/docs/funnel)
[Improve Conversion](https://docs.heapanalytics.com/docs/improve-conversion#section-how-can-i-track-a-specific-channel-or-campaign-)

## Make it Easier for Customers to Buy
See every action before a conversion. Expose friction in your user flows and measure the effectiveness of your A/B tests.

### Retroactive Funnels
Dynamically change your funnel events. Discover which page or even which form field is causing users to drop off, and compare how cohorts convert.


### Auto-Capture A/B Testing Data
Understand how A/B tests influence your customers’ entire experience with Heap’s one click integration. Codelessly enrich your user behavior data with data from your A/B testing suite (Optimizely, VWO, Monetate, etc.)

### Behavioral Segmentation
Does reading reviews, blogposts, or white papers correlate with higher conversion rates? Unlike Google and Adobe, use behavior in your segments.


### Complete & Retroactive Dataset
Autocapture ensures your underlying dataset is complete. Every piece of user interaction is retroactive.

### Complete User History
Don't miss out on unknown unknowns. Capture every click, tap, swipe, form change, and more without any code.

### Make Better Decisions with a Complete and Retroactive Dataset
Autocapture ensures that your underlying dataset is always clean, standardized, and immutable. Every piece of user interaction is retroactive.

Retroactively get data on any interaction and never worry about lost data
Clean underlying schema ensures high quality data and minimal maintenance required

### Trust Your Data
How Virtual Events are defined automatically propagates across your entire system. Always have access to what an event means, who defined it, and when it was last updated. Never dig through your site’s HTML or reference an outdated tracking plan again.

# 4.

> I’m trying to follow your documentation for adding a Snapshot via JavaScript, however I’m not a developer and I really don’t understand this documentation at all! I’m trying to add a Snapshot that picks up the sale percentage as a property when someone clicks on a product on this page: https://naturebox.com/
Could you help me out by writing this custom JS for me and explaining to me how I can do this myself in the future? I’d really appreciate it!


### Capture On-Page Data with Snapshots
Snapshots allow you to codelessly capture relevant data from a page and attach them to events.

Want to capture a product’s price or quantity purchased without any code? Use our point and click editor to grab text from the page and attach it to events as a property.
Enrich your dataset by adding custom properties without committing to your codebase. Attach custom properties to any pageview as well as all events that occur on that pageview.



[Snapshots: Track Rich Data Without Writing Code](https://heapanalytics.com/blog/company/snapshots-track-rich-data-without-writing-code)

[Snapshot](https://docs.heapanalytics.com/docs/snapshots)

[Naturebox customer stories](https://heapanalytics.com/customer-stories/naturebox)
[Codeless Analytics From Atttribution to Conversions](http://marketing.heapanalytics.com/ecommerce/shopify)

# 5. 

> I think all of the data is up and running for our account and we’ve finished our implementation! Now we just need to finalize the model for lead source attribution using this data. As a refresher, we want to attribute leads across 3 equally weighted touches across:

a. First Touch: First event recorded 

b. Account Creation: First time a customer completes their account 

c. First Order: First time a customer completes their order 

> For all of these, I imagine we will want to pull the from the session where the event occurred. Is that the correct approach? 

> Where I'm running into trouble is in identifying where in our SQL database I should actually query the data. There aren't many fields available in the 'all_events' Heap table and I don’t get the difference between the all_events tables and the individual event table in Heap SQL. Where should I find this data?

> Assuming I want to keep our attribution model simple, could you help me write a SQL query that equally weights attribution by UTM source for these events or at least point me in the right direction of what I’d need to do to start building this out?




### Advanced Attribution
Find the channels with the highest return. Rather than focusing on first or last touch, Heap captures every touch to help companies understand which channels drive conversions, higher order values, and repeat customers.

##### Behavioral Attribution: 
Tie in touchpoints like opening email, reading blog posts, or watching videos
Change behaviors, channels, and conversion events on the fly – without developers

[Understand Attribution](https://docs.heapanalytics.com/docs/understand-attribution)

[Calculated Weighted Average in SQL](https://stackoverflow.com/questions/44122466/calculated-weighted-average-in-sql)

[Organizing the marketing touch points](http://www.silota.com/docs/recipes/sql-multichannel-marketing-attribution-models-reporting.html)
[]()
[]()
