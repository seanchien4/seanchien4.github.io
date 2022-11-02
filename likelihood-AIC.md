---
layout: page
title: Likelihood and AIC model selection
subtitle: Sean's note
---

---
title: "Likelihood and AIC model selection"
output: html_document
date: "2022-11-02"
---

### Likelihood and AIC model selection 

First, we need to understand what model selection is. Model selection is a process that to choose one of the models which addresses the problem the best.  

Likelihood is the probability of a dataset given a model. Higher the better. Its range is between 0 and 1.  


AIC(Akaike information criterion)  

𝐴𝐼𝐶 = 2𝑘 − 2ln(𝐿)  
k = number of parameters  
ln(L) log likelihood of the data (a big negative number)  

Adding additional predictor variables will always improve the fit of the data under the model.  

R example: 

```{r, echo = T}
set.seed(2)
x <- runif(100)
y <- rnorm(100, mean = 4*x)
z <- runif(100)
```

```{r, echo=FALSE}
plot(y~x)
```

```{r, eval=T}
fit<-glm(y~x)
fit2<-glm(y~x+z)
```
```{r}
summary(fit)
summary(fit2)
```



Then, we can do log-likelihood

```{r}
logLik(fit)
logLik(fit2)
```

Through those two results, we can observe two things  
1.	The model 2 (fit2) has a lower AIC, so it has better fit.  
2.	The model 2 (fit2)’s log-likelihood is closer to 0, it has better fit  
Also, because the model 2 has better fit, it improves the predictor variables  

Run anova table to compute analysis of variance (or deviance)  
```{r}
anova(fit, fit2, test = "LRT")
```
The residual deviance is how well the response variable can be predicted by a model with predictor variables.  
The lower the value, the better the model is able to predict the value of the response variable.  

We cna try to run more complex model and see if they can improve the the predictor variables  

```{r}
y2 <- rnorm(100, mean=3*x+z)
fit3 <- glm(y2 ~ x)
fit4 <- glm(y2 ~ x + z)
```

```{r}
summary(fit3)
summary(fit4)
anova(fit3, fit4, test="LRT")
logLik(fit3)
logLik(fit4)
```

### Logistic regression
Logistic regression is a process of modeling the probability of a discrete outcome given an input variable.  


