pip install pandas
import pandas as pd
from __future__ import division
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.pyplot as plt
from matplotlib import style
style.use('ggplot')
import numpy as np
from random import randint
from math import sqrt
from sklearn.metrics import silhouette_score
from sklearn import cluster
from scipy.cluster.hierarchy import dendrogram, linkage
read_file=read('rC:\Users\sande\Desktop\scans.txt')
read_content= read_file.read()
colors = ['g', 'r', 'g', 'r', 'g', 'r', 'g', 'r', 'g', 'r','g', 'r', 'g', 'r', 'g', 'r', 'g', 'r']
points = [[4, -2],
           [-1, 7],
           [9, -6]]
sigmas = [[-0.8, 0.3],
          [-0.3, 0.5],
          [-1.1, 0.7]]
np.random.seed(34) 
xpts = np.zeros(1)
ypts = np.zeros(1)
labels = np.zeros(1)
import skfuzzy as fuzz
fig1, axes1 = plt.subplots(3, 3, figsize=(8, 8))
alldata = np.vstack((xpts, ypts))
fpcs = []
 
print (alldata)
mal_points=0
vulnerability=0
for ncenters, ax in enumerate(axes1.reshape(-1), 2):
    cntr, u, u0, d, jm, p, fpc = fuzz.cluster.cmeans(
        alldata, ncenters, 2, error=0.005, maxiter=1000, init=None)
    fpcs.append(fpc)
    print (u)
    cluster_membership = np.argmax(u, axis=0)
    for j in range(ncenters):
        ax.plot(xpts[cluster_membership == j],
                ypts[cluster_membership == j], '.', color=colors[j])
    for pt in cntr:
        ax.plot(pt[0], pt[1], 'rs')
 
    ax.set_title('Centers = {0}; FPC = {1:.2f}'.format(ncenters, fpc))
    ax.axis('off')
 
for i, ((xmu, ymu), (xsigma, ysigma)) in enumerate(zip(points, sigmas)): xpts = np.hstack((xpts, np.random.standard_normal(200) * xsigma + xmu))
    ypts = np.hstack((ypts, np.random.standard_normal(200) * ysigma + ymu))
    labels = np.hstack((labels, np.ones(200) * i))
 
fig0, ax0 = plt.subplots()
nd=0;
d=0;
for label in range(9):
    ax0.plot(xpts[labels == label], ypts[labels == label], '.',color=colors[label])
    if colors[label]=='g':
        nd+=1;
    else:
        d+=1;
 
ax0.set_title('Potential Threat to Repository')
plt.show()
if(d>nd):
    print("Malicious Percent")
    print(d*100/(nd+d))
else:
    print("Not Malicious Percent")
    print(nd*100/(nd+d)-d*100/(nd+d))
