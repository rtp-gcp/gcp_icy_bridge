# ICY-BRIDGES detection 

Task is to detect objects - icy bridges, on images coming from road cameras.

- Annotattion made with [CVAT.ai](https://www.cvat.ai/) with free account
  - Two classes for labels:
    - bridge
    - icy_bridge
- Data splitted into train and validate datasets 
- Yolov8 nano model trained for object detection
- Trained model validated for accuracy

Its a simple solution to try solve the problem and learn the CV technologies and object detection. 

## Results:
### How it should been detected:
!["How it should be"](/genai/notebooks/icy-bridges-detection/runs/detect/val2/val_batch0_labels.jpg)
### Whats model have detected
!["What model detected"](/genai/notebooks/icy-bridges-detection/runs/detect/val2/val_batch0_pred.jpg)
### Confusion Matrix
!["Confusion Martix"](/genai/notebooks/icy-bridges-detection/runs/detect/val2/confusion_matrix_normalized.png)

## Useful resources:
Train Yolov8 object detection on a custom dataset [https://www.youtube.com/watch?v=m9fH9OWn8YM](https://www.youtube.com/watch?v=m9fH9OWn8YM)