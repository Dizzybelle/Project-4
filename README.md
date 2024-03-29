# Project-4: Predicting Presidential Vote

## Project Concept
The idea for our project was to create a voter predictor to predict how someone would vote for president during the 2024 election. This election of course being unusual in the sense that both of the two major party candidates from the 2020 presidential election are running again in the 2024 election. This project will be useful for anyone trying to predict how someone might vote in the 2024 election, for example a political campaign or political commentator in the media. To this end we created a supervised matching learning model trained using survey data.

## Data Used
We used data from the American National Election Studies (ANES) 2020 time series release. This survey asks approximately 8,000 respondents various political questions from a respondent’s ideology to how they voted.
The citation for the ANES data is: American National Election Studies. 2021. ANES 2020 Time Series Study Full Release [dataset and documentation]. February 10, 2022 version. www.electionstudies.org

## The Model
The target variable was whether or not a respondent voted for Biden or Trump. The features we used to train the model are listed below along with an explanation of why each feature was used,
  - Party ID: Republicans are expected to vote more for Trump, Democrats are expected to vote more for Biden
  - Age: Older voters tend to be more likely to support Trump, while younger voters are more likely to support Biden
  - Thermometer rating (0-100) of Biden: People with higher thermometer ratings of Biden are expected to be more likely to vote for Biden
  - Thermometer rating (0-100) of Trump: People with higher thermometer ratings of Biden are expected to be more likely to vote for Trump
  - Race/Ethnicity: People who are white are more likely to vote for Trump, while minority groups are more likely to vote for Biden
  - Income: Those with higher incomes tend to be more conservative and therefore more likely to vote for Trump, while those with lower incomes tend to be more likely to vote Democrat and therefore vote for Biden
  - Ideology: Ideology (Liberal/Conservative) was also included in addition to party because many people do not identify with a party but do identify with an ideology. Those who are liberal are expected to be more likely to vote for Biden, while those who are conservative are expected to be more likely to vote for Trump.

## The Final User Product
Once we trained and optimized the model we took the coefficients from the model and plugged them into a JavaScript file that is then used along with html and css to create a webpage where someone can select the individual characteristics of a respondent and get the likelihood of the respondent voting for Trump or Biden.

## Results
The variables that had the most impact on whether or not someone was likely to vote for Biden or Trump were the thermometer rating for Trump, Race/Ethnicity, Ideology, and Party. Interestingly the thermometer rating for Biden had much less of an impact, this is likely because Trump is a more polarizing figure than Trump. Interestingly, Income and Age do have some impact on a respondent's likelihood of voting for Biden/Trump but much less than the other variables.
