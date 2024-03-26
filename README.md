# Project-4: Predicting Presidential Vote

## Project Concept
The idea for our project was to create a voter predictor to predict how someone would vote for president during the 2024 election. This election of course being unusual in the sense that both of the two major party candidates from the 2020 presidential election are running again in the 2024 election. This project will be useful for anyone trying to predict how someone might vote in the 2024 election, for example a political campaign or political commentator in the media. To this end we created a supervised matching learning model trained using survey data.

## Data Used
We used data from the American National Election Studies (ANES) 2020 time series release. This survey asks approximately 8,000 respondents various political questions from a respondent’s ideology to how they voted.
The citation for the ANES data is: American National Election Studies. 2021. ANES 2020 Time Series Study Full Release [dataset and documentation]. February 10, 2022 version. www.electionstudies.org

## The Model
The target variable was whether or not a respondent voted for Biden or Trump. The features we used to train the model are listed below along with an explanation of why each feature was used,
-Party ID: Republicans are expected to vote more for Trump, Democrats are expected to vote more for Biden
-Age: Older voters tend to be more likely to support Trump, while younger voters are more likely to support Biden
-Gender: Women are more likely to support Biden, while Men are more likely to support Trump
-Location: People who live in more rural locations tend to be more conservative and therefore more likely to vote for Trump, while people who live in more urban areas tend to be more liberal and therefore more likely to vote for Biden
-If the respondent thought the country was on the right track in 2020: People who thought the country was on the right track under Trump are expected to be more likely to vote for Trump, while people who did not think the country was on the right track are expected to be more likely to vote for Biden
-Thermometer rating (0-100) of Biden: People with higher thermometer ratings of Biden are expected to be more likely to vote for Biden
-Thermometer rating (0-100) of Trump: People with higher thermometer ratings of Biden are expected to be more likely to vote for Trump
-Race/Ethnicity: People who are white are more likely to vote for Trump, while minority groups are more likely to vote for Biden
-Income: Those with higher incomes tend to be more conservative and therefore more likely to vote for Trump, while those with lower incomes tend to be more likely to vote Democrat and therefore vote for Biden

## The Final User Product
Once we trained and optimized the model we took the coefficients from the model and plugged them into a JavaScript file that is then used along with html and css to create a webpage where someone can select the individual characteristics of a respondent and get the likelihood of the respondent voting for Trump or Biden.

