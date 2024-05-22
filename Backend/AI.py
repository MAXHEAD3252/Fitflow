from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import json
from sklearn.cluster import KMeans

app = Flask(__name__)
receivedata = {}
receivedataexercise = {}

def Weight_Loss(age, weight, height):
    
    # age = int(request.form['age'])
    # weight = float(request.form['weight'])
    # height = float(request.form['height'])

    bmi = weight / (height ** 2)
    
    
    #USER_INP = simpledialog.askstring(title="Food Timing",
    #                                  prompt="Enter 1 for Breakfast, 2 for Lunch and 3 for Dinner")
    
    
    data=pd.read_csv('F:\Learning_Work\Vs_Work\Fitflow\Backend\Dataset\input.csv')
    
    
    Breakfastdata=data['Breakfast']
    BreakfastdataNumpy=Breakfastdata.to_numpy()
    
    Lunchdata=data['Lunch']
    LunchdataNumpy=Lunchdata.to_numpy()
    
    Dinnerdata=data['Dinner']
    DinnerdataNumpy=Dinnerdata.to_numpy()
    
    Food_itemsdata=data['Food_items']
    breakfastfoodseparated=[]
    Lunchfoodseparated=[]
    Dinnerfoodseparated=[]
    
    breakfastfoodseparatedID=[]
    LunchfoodseparatedID=[]
    DinnerfoodseparatedID=[]
    
    for i in range(len(Breakfastdata)):
      if BreakfastdataNumpy[i]==1:
        breakfastfoodseparated.append(Food_itemsdata[i])
        breakfastfoodseparatedID.append(i)
      if LunchdataNumpy[i]==1:
        Lunchfoodseparated.append(Food_itemsdata[i])
        LunchfoodseparatedID.append(i)
      if DinnerdataNumpy[i]==1:
        Dinnerfoodseparated.append(Food_itemsdata[i])
        DinnerfoodseparatedID.append(i)
        
        
    LunchfoodseparatedIDdata = data.iloc[LunchfoodseparatedID]
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.T
    val=list(np.arange(5,16))
    Valapnd=[0]+[4]+val
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.iloc[Valapnd]
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.T
    
    breakfastfoodseparatedIDdata = data.iloc[breakfastfoodseparatedID]
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.T
    val=list(np.arange(5,16))
    Valapnd=[0]+[4]+val
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.iloc[Valapnd]
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.T
    
    DinnerfoodseparatedIDdata = data.iloc[DinnerfoodseparatedID]
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.T
    val=list(np.arange(5,16))
    Valapnd=[0]+[4]+val
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.iloc[Valapnd]
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.T
    
    
    
    for lp in range (0,80,20):
        test_list=np.arange(lp,lp+20)
        for i in test_list: 
            if(i == age):
                #print('Your age is between:',str(lp),str(lp+10))
                agecl=round(lp/20)    
   
    #print("Your body mass index is: ", bmi)
    if ( bmi < 16):
        #print("You are Severely Underweight")
        clbmi=4
    elif ( bmi >= 16 and bmi < 18.5):
        #print("You are Underweight")
        clbmi=3
    elif ( bmi >= 18.5 and bmi < 25):
        #print("You are Healthy")
        clbmi=2
    elif ( bmi >= 25 and bmi < 30):
        #print("You are Overweight")
        clbmi=1
    elif ( bmi >=30):
        #print("You are Severely Overweight")
        clbmi=0
    
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.to_numpy()
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.to_numpy()
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.to_numpy()
    ti=(clbmi+agecl)/2
    
    ## K-Means Based  Dinner Food
    Datacalorie=DinnerfoodseparatedIDdata[1:,1:len(DinnerfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu=np.arange(0,len(kmeans.labels_))
    dnrlbl=kmeans.labels_
    
    ## K-Means Based  Lunch Food
    Datacalorie=LunchfoodseparatedIDdata[1:,1:len(LunchfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu=np.arange(0,len(kmeans.labels_))
    lnchlbl=kmeans.labels_
    
    ## K-Means Based  Breakfast Food
    Datacalorie=breakfastfoodseparatedIDdata[1:,1:len(breakfastfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu=np.arange(0,len(kmeans.labels_))
    brklbl=kmeans.labels_
    
    ## Reading of the Dataset
    datafin=pd.read_csv('F:\Learning_Work\Vs_Work\Fitflow\Backend\Dataset\inputfin.csv')
    
    dataTog=datafin.T

    bmicls=[0,1,2,3,4]
    agecls=[0,1,2,3,4]
    
    weightlosscat = dataTog.iloc[[1,2,7,8]]
    weightlosscat=weightlosscat.T
    weightgaincat= dataTog.iloc[[0,1,2,3,4,7,9,10]]
    weightgaincat=weightgaincat.T
    healthycat = dataTog.iloc[[1,2,3,4,6,7,9]]
    healthycat=healthycat.T
    weightlosscatDdata=weightlosscat.to_numpy()
    weightgaincatDdata=weightgaincat.to_numpy()
    healthycatDdata=healthycat.to_numpy()
    weightlosscat=weightlosscatDdata[1:,0:len(weightlosscatDdata)]
    weightgaincat=weightgaincatDdata[1:,0:len(weightgaincatDdata)]
    healthycat=healthycatDdata[1:,0:len(healthycatDdata)]
    
    weightlossfin=np.zeros((len(weightlosscat)*5,6),dtype=np.float32)
    weightgainfin=np.zeros((len(weightgaincat)*5,10),dtype=np.float32)
    healthycatfin=np.zeros((len(healthycat)*5,9),dtype=np.float32)
    
    t=0
    r=0
    s=0
    yt=[]
    yr=[]
    ys=[]
    for zz in range(5):
        for jj in range(len(weightlosscat)):
            valloc=list(weightlosscat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightlossfin[t]=np.array(valloc)
            yt.append(brklbl[jj])
            t+=1
            
        for jj in range(len(weightlosscat)):
            valloc=list(weightlosscat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightlossfin[r]=np.array(valloc)
            yr.append(lnchlbl[jj])
            r+=1
            
        for jj in range(len(weightlosscat)):
            valloc=list(weightlosscat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightlossfin[s]=np.array(valloc)
            ys.append(dnrlbl[jj])
            s+=1
            
    X_test=np.zeros((len(weightlosscat),6),dtype=np.float32)
    
    for jj in range(len(weightlosscat)):
        valloc=list(weightlosscat[jj])
        valloc.append(agecl)
        valloc.append(clbmi)
        X_test[jj]=np.array(valloc)*ti
        
  
    from sklearn.model_selection import train_test_split
        
    #val=int(USER_INP)
    
    #if val==1:
    X_train= weightlossfin
    y_train=yt
        
    #elif val==2:
    X_train= weightlossfin
    y_train=yr 
        
    #elif val==3:
    X_train= weightlossfin
    y_train=ys
        
    from sklearn.ensemble import RandomForestClassifier
    
    clf=RandomForestClassifier(n_estimators=100)
    
    clf.fit(X_train,y_train)
    
    y_pred=clf.predict(X_test)
    
        
    # print ('SUGGESTED FOOD ITEMS ::')
    food = []
    for ii in range(len(y_pred)):
        if y_pred[ii]==2:
            # return render_template('recommendation.html', suggested_food_items=Food_itemsdata[ii])
            food.append(Food_itemsdata[ii])
            #print (Food_itemsdata[ii])
    return food


def Weight_Gain(age, weight, height):

    
    # age = int(request.form['age'])
    # weight = float(request.form['weight'])
    # height = float(request.form['height'])

    bmi = weight / (height ** 2)
   
    #USER_INP = simpledialog.askstring(title="Food Timing",
    #                                  prompt="Enter 1 for Breakfast, 2 for Lunch and 3 for Dinner")
    
    data=pd.read_csv('F:\Learning_Work\Vs_Work\Fitflow\Backend\Dataset\input.csv')
    data.head(5)
    Breakfastdata=data['Breakfast']
    BreakfastdataNumpy=Breakfastdata.to_numpy()
    
    Lunchdata=data['Lunch']
    LunchdataNumpy=Lunchdata.to_numpy()
    
    Dinnerdata=data['Dinner']
    DinnerdataNumpy=Dinnerdata.to_numpy()
    
    Food_itemsdata=data['Food_items']
    breakfastfoodseparated=[]
    Lunchfoodseparated=[]
    Dinnerfoodseparated=[]
    
    breakfastfoodseparatedID=[]
    LunchfoodseparatedID=[]
    DinnerfoodseparatedID=[]
    
    for i in range(len(Breakfastdata)):
      if BreakfastdataNumpy[i]==1:
        breakfastfoodseparated.append(Food_itemsdata[i])
        breakfastfoodseparatedID.append(i)
      if LunchdataNumpy[i]==1:
        Lunchfoodseparated.append(Food_itemsdata[i])
        LunchfoodseparatedID.append(i)
      if DinnerdataNumpy[i]==1:
        Dinnerfoodseparated.append(Food_itemsdata[i])
        DinnerfoodseparatedID.append(i)
    
    LunchfoodseparatedIDdata = data.iloc[LunchfoodseparatedID]
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.T
    val=list(np.arange(5,15))
    Valapnd=[0]+val
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.iloc[Valapnd]
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.T
    
    breakfastfoodseparatedIDdata = data.iloc[breakfastfoodseparatedID]
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.T
    val=list(np.arange(5,15))
    Valapnd=[0]+val
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.iloc[Valapnd]
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.T
    
    
    DinnerfoodseparatedIDdata = data.iloc[DinnerfoodseparatedID]
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.T
    val=list(np.arange(5,15))
    Valapnd=[0]+val
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.iloc[Valapnd]
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.T
    
    agewiseinp=0
    
    for lp in range (0,80,20):
        test_list=np.arange(lp,lp+20)
        for i in test_list: 
            if(i == age):
                #print('Your age is between',str(lp),str(lp+10))
                tr=round(lp/20)  
                agecl=round(lp/20)    

    #print("Your body mass index is: ", bmi)
    if ( bmi < 16):
        #print("You are severely underweight")
        clbmi=4
    elif ( bmi >= 16 and bmi < 18.5):
        #print("You are underweight")
        clbmi=3
    elif ( bmi >= 18.5 and bmi < 25):
        #print("You are Healthy")
        clbmi=2
    elif ( bmi >= 25 and bmi < 30):
        #print("You are overweight")
        clbmi=1
    elif ( bmi >=30):
        #print("You are severely overweight")
        clbmi=0    
        
    val1=DinnerfoodseparatedIDdata.describe()
    valTog=val1.T
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.to_numpy()
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.to_numpy()
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.to_numpy()
    ti=(bmi+agecl)/2
    
    ## K-Means Based  Dinner Food
    Datacalorie=DinnerfoodseparatedIDdata[1:,1:len(DinnerfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu=np.arange(0,len(kmeans.labels_))
    dnrlbl=kmeans.labels_
    
    ## K-Means Based  lunch Food
    Datacalorie=LunchfoodseparatedIDdata[1:,1:len(LunchfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu=np.arange(0,len(kmeans.labels_))
    lnchlbl=kmeans.labels_
    
    ## K-Means Based  lunch Food
    Datacalorie=breakfastfoodseparatedIDdata[1:,1:len(breakfastfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu=np.arange(0,len(kmeans.labels_))
    brklbl=kmeans.labels_
    
    inp=[]
    datafin=pd.read_csv('F:\Learning_Work\Vs_Work\Fitflow\Backend\Dataset\inputfin.csv')
    datafin.head(5)
    dataTog=datafin.T
    bmicls=[0,1,2,3,4]
    agecls=[0,1,2,3,4]
    weightlosscat = dataTog.iloc[[1,2,7,8]]
    weightlosscat=weightlosscat.T
    weightgaincat= dataTog.iloc[[0,1,2,3,4,7,9,10]]
    weightgaincat=weightgaincat.T
    healthycat = dataTog.iloc[[1,2,3,4,6,7,9]]
    healthycat=healthycat.T
    weightlosscatDdata=weightlosscat.to_numpy()
    weightgaincatDdata=weightgaincat.to_numpy()
    healthycatDdata=healthycat.to_numpy()
    weightlosscat=weightlosscatDdata[1:,0:len(weightlosscatDdata)]
    weightgaincat=weightgaincatDdata[1:,0:len(weightgaincatDdata)]
    healthycat=healthycatDdata[1:,0:len(healthycatDdata)]
    
    weightlossfin=np.zeros((len(weightlosscat)*5,6),dtype=np.float32)
    weightgainfin=np.zeros((len(weightgaincat)*5,10),dtype=np.float32)
    healthycatfin=np.zeros((len(healthycat)*5,9),dtype=np.float32)
    t=0
    r=0
    s=0
    yt=[]
    yr=[]
    ys=[]
    for zz in range(5):
        for jj in range(len(weightgaincat)):
            valloc=list(weightgaincat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightgainfin[t]=np.array(valloc)
            yt.append(brklbl[jj])
            t+=1
        for jj in range(len(weightgaincat)):
            valloc=list(weightgaincat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightgainfin[r]=np.array(valloc)
            yr.append(lnchlbl[jj])
            r+=1
        for jj in range(len(weightgaincat)):
            valloc=list(weightgaincat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightgainfin[s]=np.array(valloc)
            ys.append(dnrlbl[jj])
            s+=1

    
    X_test=np.zeros((len(weightgaincat),10),dtype=np.float32)

   
    for jj in range(len(weightgaincat)):
        valloc=list(weightgaincat[jj])
        valloc.append(agecl)
        valloc.append(clbmi)
        X_test[jj]=np.array(valloc)*ti
    
    from sklearn.model_selection import train_test_split
    
    #val=int(USER_INP)
    
    #if val==1:
    X_train= weightgainfin
    y_train=yt
        
    #elif val==2:
    X_train= weightgainfin
    y_train=yr 
        
    #elif val==3:
    X_train= weightgainfin
    y_train=ys
    
   
    from sklearn.model_selection import train_test_split
    
    from sklearn.ensemble import RandomForestClassifier
    
    clf=RandomForestClassifier(n_estimators=100)
    
    clf.fit(X_train,y_train)
    
    y_pred=clf.predict(X_test)
    
    
    
    
    #print ('SUGGESTED FOOD ITEMS ::')
    food = []
    for ii in range(len(y_pred)):
        if y_pred[ii]==2:
            # return render_template('recommendation.html', suggested_food_items=Food_itemsdata[ii])
            food.append(Food_itemsdata[ii])
            #print (Food_itemsdata[ii])
    return food 


def Healthy(age, weight, height):
    
    # age = int(request.form['age'])
    # weight = float(request.form['weight'])
    # height = float(request.form['height'])

    # height =  height/100
    bmi = weight / (height ** 2)
    # bmi = weight / height
    
    data=pd.read_csv('F:\Learning_Work\Vs_Work\Fitflow\Backend\Dataset\input.csv')
    Breakfastdata=data['Breakfast']
    BreakfastdataNumpy=Breakfastdata.to_numpy()
    
    Lunchdata=data['Lunch']
    LunchdataNumpy=Lunchdata.to_numpy()
    
    Dinnerdata=data['Dinner']
    DinnerdataNumpy=Dinnerdata.to_numpy()
    
    Food_itemsdata=data['Food_items']
    breakfastfoodseparated=[]
    Lunchfoodseparated=[]
    Dinnerfoodseparated=[]
    
    breakfastfoodseparatedID=[]
    LunchfoodseparatedID=[]
    DinnerfoodseparatedID=[]
    
    for i in range(len(Breakfastdata)):
      if BreakfastdataNumpy[i]==1:
        breakfastfoodseparated.append(Food_itemsdata[i])
        breakfastfoodseparatedID.append(i)
      if LunchdataNumpy[i]==1:
        Lunchfoodseparated.append(Food_itemsdata[i])
        LunchfoodseparatedID.append(i)
      if DinnerdataNumpy[i]==1:
        Dinnerfoodseparated.append(Food_itemsdata[i])
        DinnerfoodseparatedID.append(i)
    
    LunchfoodseparatedIDdata = data.iloc[LunchfoodseparatedID]
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.T
    val=list(np.arange(5,15))
    Valapnd=[0]+val
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.iloc[Valapnd]
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.T
    
    breakfastfoodseparatedIDdata = data.iloc[breakfastfoodseparatedID]
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.T
    val=list(np.arange(5,15))
    Valapnd=[0]+val
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.iloc[Valapnd]
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.T
    
    DinnerfoodseparatedIDdata = data.iloc[DinnerfoodseparatedID]
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.T
    val=list(np.arange(5,15))
    Valapnd=[0]+val
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.iloc[Valapnd]
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.T
     
    agewiseinp=0
    
    for lp in range (0,80,20):
        test_list=np.arange(lp,lp+20)
        for i in test_list: 
            if(i == age):
                #print('Your age is between',str(lp),str(lp+10))
                tr=round(lp/20)  
                agecl=round(lp/20)    
    
    #print("Your body mass index is: ", bmi)
    if ( bmi < 16):
        #print("You are severely underweight")
        clbmi=4
    elif ( bmi >= 16 and bmi < 18.5):
        #print("You are underweight")
        clbmi=3
    elif ( bmi >= 18.5 and bmi < 25):
        #print("You are Healthy")
        clbmi=2
    elif ( bmi >= 25 and bmi < 30):
        #print("You are overweight")
        clbmi=1
    elif ( bmi >=30):
        print("You are severely overweight")
        clbmi=0    
    val1=DinnerfoodseparatedIDdata.describe()
    valTog=val1.T
    DinnerfoodseparatedIDdata=DinnerfoodseparatedIDdata.to_numpy()
    LunchfoodseparatedIDdata=LunchfoodseparatedIDdata.to_numpy()
    breakfastfoodseparatedIDdata=breakfastfoodseparatedIDdata.to_numpy()
    ti=(bmi+agecl)/2
    
    ## K-Means Based Dinner Food
    Datacalorie=DinnerfoodseparatedIDdata[1:,1:len(DinnerfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu=np.arange(0,len(kmeans.labels_))
    dnrlbl=kmeans.labels_
    
    ## K-Means Based lunch Food
    Datacalorie=LunchfoodseparatedIDdata[1:,1:len(LunchfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu=np.arange(0,len(kmeans.labels_))
    lnchlbl=kmeans.labels_
    
    ## K-Means Based  lunch Food
    Datacalorie=breakfastfoodseparatedIDdata[1:,1:len(breakfastfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu=np.arange(0,len(kmeans.labels_))
    brklbl=kmeans.labels_
    inp=[]
    datafin=pd.read_csv('F:\Learning_Work\Vs_Work\Fitflow\Backend\Dataset\inputfin.csv')
    datafin.head(5)
    dataTog=datafin.T
    bmicls=[0,1,2,3,4]
    agecls=[0,1,2,3,4]
    weightlosscat = dataTog.iloc[[1,2,7,8]]
    weightlosscat=weightlosscat.T
    weightgaincat= dataTog.iloc[[0,1,2,3,4,7,9,10]]
    weightgaincat=weightgaincat.T
    healthycat = dataTog.iloc[[1,2,3,4,6,7,9]]
    healthycat=healthycat.T
    weightlosscatDdata=weightlosscat.to_numpy()
    weightgaincatDdata=weightgaincat.to_numpy()
    healthycatDdata=healthycat.to_numpy()
    weightlosscat=weightlosscatDdata[1:,0:len(weightlosscatDdata)]
    weightgaincat=weightgaincatDdata[1:,0:len(weightgaincatDdata)]
    healthycat=healthycatDdata[1:,0:len(healthycatDdata)]
    
    weightlossfin=np.zeros((len(weightlosscat)*5,6),dtype=np.float32)
    weightgainfin=np.zeros((len(weightgaincat)*5,10),dtype=np.float32)
    healthycatfin=np.zeros((len(healthycat)*5,9),dtype=np.float32)
    t=0
    r=0
    s=0
    yt=[]
    yr=[]
    ys=[]
    for zz in range(5):
        for jj in range(len(healthycat)):
            valloc=list(healthycat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            healthycatfin[t]=np.array(valloc)
            yt.append(brklbl[jj])
            t+=1
        for jj in range(len(healthycat)):
            valloc=list(healthycat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            healthycatfin[r]=np.array(valloc)
            yr.append(lnchlbl[jj])
            r+=1
        for jj in range(len(healthycat)):
            valloc=list(healthycat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            healthycatfin[s]=np.array(valloc)
            ys.append(dnrlbl[jj])
            s+=1

    X_test=np.zeros((len(healthycat)*5,9),dtype=np.float32)
    for jj in range(len(healthycat)):
        valloc=list(healthycat[jj])
        valloc.append(agecl)
        valloc.append(clbmi)
        X_test[jj]=np.array(valloc)*ti
    
    
    from sklearn.model_selection import train_test_split
    

    #val=int(USER_INP)
    
    #if val==1:
    X_train= healthycatfin
    y_train=yt
        
    #elif val==2:
    X_train= healthycatfin
    y_train=yt 
        
    #elif val==3:
    X_train= healthycatfin
    y_train=ys
        
    
    from sklearn.model_selection import train_test_split
    from sklearn.ensemble import RandomForestClassifier
    
    clf=RandomForestClassifier(n_estimators=100)
    
    clf.fit(X_train,y_train)
    
    y_pred=clf.predict(X_test)
    
    #print ('SUGGESTED FOOD ITEMS ::')
    food = []
    for ii in range(len(y_pred)):
        if y_pred[ii]==2:
            # return render_template('recommendation.html', suggested_food_items=Food_itemsdata[ii])
            food.append(Food_itemsdata[ii])
            #print (Food_itemsdata[ii])
    return food





@app.route('/api/data', methods=['POST', 'OPTIONS'])
def receive_data():

    global receivedata  

    if request.method == 'OPTIONS':
        # Respond to preflight requests
        response = app.make_default_options_response()
    else:
        receivedata = request.json  # Get the JSON data sent from the frontend
        # Process the data here
        # suggestion = Weight_Loss(receive_data['age'], receive_data['weight'], receive_data['height'])
        print(receivedata)
        response = jsonify({'message': 'Data received successfully'})
    # Add CORS headers to allow requests from the frontend
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'POST'
    return response






@app.route('/api/display',methods=['POST', 'OPTIONS'])
def send_data(): 
     
     global receivedata
     body = receivedata['body']

     if request.method == 'OPTIONS':
        # Respond to preflight requests
        response = app.make_default_options_response()
     else:
        body = json.loads(body)
        age = body['age']
        weight = body['weight']
        height = body['height']

        print(body)

        if body['plan'] == 'Weight Loss':
            datasend = Weight_Loss(int(age), int(weight), int(height))  # Get the JSON data sent from the frontend
            # Process the data here
            response = jsonify({"message": f"{datasend}"})
        elif body['plan'] == 'Weight Gain':
            datasend = Weight_Gain(int(age), int(weight), int(height))  # Get the JSON data sent from the frontend
            # Process the data here
            response = jsonify({"message": f"{datasend}"})
        elif body['plan'] == 'Healthy':
            datasend = Healthy(int(age), int(weight), int(height))  # Get the JSON data sent from the frontend
            # Process the data here
            response = jsonify({"message": f"{datasend}"})
        else :
            response = jsonify({"message": "Something went wrong..."})



    # Add CORS headers to allow requests from the frontend
     response.headers['Access-Control-Allow-Origin'] = '*'
     response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
     response.headers['Access-Control-Allow-Methods'] = 'POST'
     return response
 

# exercise data fetch
@app.route('/api/data/exercise', methods=['POST', 'OPTIONS'])
def receive_exercise():

    global receivedataexercise  

    if request.method == 'OPTIONS':
        # Respond to preflight requests
        response = app.make_default_options_response()
    else:
        receivedataexercise = request.json  # Get the JSON data sent from the frontend
        # Process the data here
        # suggestion = Weight_Loss(receive_data['age'], receive_data['weight'], receive_data['height'])
        print(receivedataexercise)
        response = jsonify({'message': 'Data received successfully'})
    # Add CORS headers to allow requests from the frontend
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'POST'
    return response





def get_exercise(body_part, level):
    data = pd.read_csv('F:\Learning_Work\Vs_Work\Fitflow\Backend\Dataset\Exercises.csv')
    exe = data[(data['BodyPart'] == body_part) & (data['Level'] == level)]
    # print(exe.head())
    personal_exercise = exe[['Exercise']]
    personal_exercise = personal_exercise.to_numpy()
    # print(personal_exercise)
    exercise = []
    for i in personal_exercise:
       temp = i[0]
       exercise.append(temp)
    # print(exercise)   
    return exercise



@app.route('/api/display/exercise',methods=['POST', 'OPTIONS'])
def send_dataexercise(): 
     
     global receivedataexercise
     body = receivedataexercise['body']

     body = json.loads(body)
     bodypart = body['bodypart']
     level = body['level']

     if request.method == 'OPTIONS':
        # Respond to preflight requests
        response = app.make_default_options_response()
     else:
        print(body)

        sendexxercise = get_exercise(bodypart, level)
        response = jsonify({"message": f"{sendexxercise}"})
        



    # Add CORS headers to allow requests from the frontend
     response.headers['Access-Control-Allow-Origin'] = '*'
     response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
     response.headers['Access-Control-Allow-Methods'] = 'POST'
     return response


if __name__ == '__main__':
    app.run(debug=True)