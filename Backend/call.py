import pandas as pd

data = pd.read_csv('F:\Learning_Work\Vs_Work\Fitflow\Backend\Dataset\Exercises.csv')


def get_exercise(body_part, level):
    exe = data[(data['BodyPart'] == body_part) & (data['Level'] == level)]
    # print(exe.head())
    personal_exercise = exe[['Exercise']]
    personal_exercise = personal_exercise.to_numpy()
    # print(personal_exercise)
    exercise = []
    for i in personal_exercise:
       temp = i[0]
       exercise.append(temp)
    print(exercise)   
    return exercise


get_exercise('Chest', 'Advanced')
