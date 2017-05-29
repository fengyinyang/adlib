Search.setIndex({docnames:["source/adversaries","source/data_reader","source/demo3","source/index","source/learners","source/learners.models","source/metrics","source/modules","source/notes/extending","source/setup"],envversion:51,filenames:["source/adversaries.rst","source/data_reader.rst","source/demo3.rst","source/index.rst","source/learners.rst","source/learners.models.rst","source/metrics.rst","source/modules.rst","source/notes/extending.rst","source/setup.rst"],objects:{"":{adversaries:[0,0,0,"-"],data_reader:[1,0,0,"-"],demo3:[2,0,0,"-"],learners:[4,0,0,"-"],metrics:[6,0,0,"-"]},"adversaries.adversary":{Adversary:[0,1,1,""]},"adversaries.adversary.Adversary":{attack:[0,2,1,""],clone:[0,2,1,""],get_available_params:[0,2,1,""],set_adversarial_params:[0,2,1,""],set_params:[0,2,1,""]},"adversaries.binary_greedy":{BinaryGreedy:[0,1,1,""]},"adversaries.binary_greedy.BinaryGreedy":{attack:[0,2,1,""],coordinate_greedy:[0,2,1,""],get_available_params:[0,2,1,""],minimize_transform:[0,2,1,""],quadratic_cost:[0,2,1,""],set_adversarial_params:[0,2,1,""],set_params:[0,2,1,""],transform_cost:[0,2,1,""]},"adversaries.cost_sensitive":{CostSensitive:[0,1,1,""]},"adversaries.cost_sensitive.CostSensitive":{a:[0,2,1,""],attack:[0,2,1,""],find_mcc:[0,2,1,""],gap:[0,2,1,""],get_available_params:[0,2,1,""],log_odds:[0,2,1,""],log_threshold:[0,2,1,""],set_adversarial_params:[0,2,1,""],set_params:[0,2,1,""]},"adversaries.feature_deletion":{FeatureDeletion:[0,1,1,""]},"adversaries.feature_deletion.FeatureDeletion":{attack:[0,2,1,""],change_instance:[0,2,1,""],get_available_params:[0,2,1,""],set_params:[0,2,1,""]},"adversaries.free_range":{FreeRange:[0,1,1,""]},"adversaries.free_range.FreeRange":{attack:[0,2,1,""],get_available_params:[0,2,1,""],set_adversarial_params:[0,2,1,""],set_params:[0,2,1,""],transform:[0,2,1,""]},"adversaries.good_word":{GoodWord:[0,1,1,""]},"adversaries.good_word.GoodWord":{BEST_N:[0,3,1,""],FIRST_N:[0,3,1,""],add_words_to_instance:[0,2,1,""],attack:[0,2,1,""],best_n_words:[0,2,1,""],build_word_set:[0,2,1,""],feature_difference:[0,2,1,""],find_witness:[0,2,1,""],first_n_words:[0,2,1,""],get_available_params:[0,2,1,""],get_n_words:[0,2,1,""],is_valid_attack_model_type:[0,2,1,""],predict:[0,2,1,""],predict_and_record:[0,2,1,""],set_adversarial_params:[0,2,1,""],set_params:[0,2,1,""]},"adversaries.simple_optimize":{SimpleOptimize:[0,1,1,""]},"adversaries.simple_optimize.SimpleOptimize":{attack:[0,2,1,""],get_available_params:[0,2,1,""],optimize:[0,2,1,""],set_adversarial_params:[0,2,1,""],set_params:[0,2,1,""]},"data_reader.extractor":{CreateData:[1,1,1,""]},"data_reader.extractor.CreateData":{base_path:[1,3,1,""],corpus:[1,3,1,""],create_corpus:[1,2,1,""],create_instances:[1,2,1,""],find_files:[1,2,1,""],labels:[1,3,1,""],num_instances:[1,3,1,""],save_data:[1,2,1,""],tf:[1,3,1,""],tf_idf:[1,2,1,""]},"data_reader.input":{FeatureVector:[1,1,1,""],Instance:[1,1,1,""],load_instances:[1,4,1,""],open_battle:[1,4,1,""],open_predictions:[1,4,1,""]},"data_reader.input.FeatureVector":{add_feature:[1,2,1,""],copy:[1,2,1,""],feature_difference:[1,2,1,""],flip_bit:[1,2,1,""],get_csr_matrix:[1,2,1,""],get_feature:[1,2,1,""],get_feature_count:[1,2,1,""],remove_feature:[1,2,1,""]},"data_reader.input.Instance":{get_feature_cost:[1,2,1,""],get_feature_vector:[1,2,1,""],get_feature_vector_cost:[1,2,1,""],get_label:[1,2,1,""],set_label:[1,2,1,""]},"data_reader.operations":{fv_equals:[1,4,1,""],sparsify:[1,4,1,""]},"data_reader.output":{save_battle:[1,4,1,""],save_data:[1,4,1,""],save_predictions:[1,4,1,""],save_transformed_instances:[1,4,1,""]},"learners.feature_deletion":{FeatureDeletion:[4,1,1,""]},"learners.feature_deletion.FeatureDeletion":{decision_function:[4,2,1,""],get_available_params:[4,2,1,""],predict:[4,2,1,""],predict_instance:[4,2,1,""],predict_proba:[4,2,1,""],set_params:[4,2,1,""],train:[4,2,1,""]},"learners.models":{model:[5,0,0,"-"],sklearner:[5,0,0,"-"]},"learners.models.model":{BaseModel:[5,1,1,""]},"learners.models.model.BaseModel":{decision_function_adversary:[5,2,1,""],get_alg:[5,2,1,""],get_available_params:[5,2,1,""],predict:[5,2,1,""],predict_proba_adversary:[5,2,1,""],set_params:[5,2,1,""],train:[5,2,1,""]},"learners.models.sklearner":{Model:[5,1,1,""]},"learners.models.sklearner.Model":{decision_function_adversary:[5,2,1,""],get_alg:[5,2,1,""],get_available_params:[5,2,1,""],predict:[5,2,1,""],predict_proba:[5,2,1,""],set_params:[5,2,1,""],train:[5,2,1,""]},"learners.retraining":{Retraining:[4,1,1,""]},"learners.retraining.Retraining":{decision_function:[4,2,1,""],predict:[4,2,1,""],predict_proba:[4,2,1,""],set_params:[4,2,1,""],train:[4,2,1,""]},"learners.simple_learner":{SimpleLearner:[4,1,1,""]},"learners.simple_learner.SimpleLearner":{predict:[4,2,1,""],set_model:[4,2,1,""],set_params:[4,2,1,""],train:[4,2,1,""]},"learners.svm_freerange":{SVMFreeRange:[4,1,1,""]},"learners.svm_freerange.SVMFreeRange":{decision_function:[4,2,1,""],get_available_params:[4,2,1,""],predict:[4,2,1,""],predict_instance:[4,2,1,""],predict_proba:[4,2,1,""],set_params:[4,2,1,""],train:[4,2,1,""]},"learners.svm_restrained":{SVMRestrained:[4,1,1,""]},"learners.svm_restrained.SVMRestrained":{decision_function:[4,2,1,""],get_available_params:[4,2,1,""],predict:[4,2,1,""],predict_instance:[4,2,1,""],predict_proba:[4,2,1,""],set_params:[4,2,1,""],train:[4,2,1,""]},"metrics.EvasionMetrics":{getAccuracy:[6,2,1,""],getPrecision:[6,2,1,""],getROC_AUC:[6,2,1,""],getRecall:[6,2,1,""],plotROC:[6,2,1,""]},adversaries:{adversary:[0,0,0,"-"],binary_greedy:[0,0,0,"-"],cost_sensitive:[0,0,0,"-"],feature_deletion:[0,0,0,"-"],free_range:[0,0,0,"-"],good_word:[0,0,0,"-"],simple_optimize:[0,0,0,"-"]},data_reader:{extractor:[1,0,0,"-"],input:[1,0,0,"-"],operations:[1,0,0,"-"],output:[1,0,0,"-"]},demo3:{main:[2,4,1,""]},learners:{feature_deletion:[4,0,0,"-"],models:[5,0,0,"-"],retraining:[4,0,0,"-"],simple_learner:[4,0,0,"-"],svm_freerange:[4,0,0,"-"],svm_restrained:[4,0,0,"-"]},metrics:{EvasionMetrics:[6,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"abstract":[0,5,8],"boolean":1,"break":8,"class":[0,1,2,4,5,6,8],"default":[0,4],"export":8,"float":[1,4,8],"function":[0,4,5,8],"int":[0,1,5,8],"new":[0,1,8],"return":[0,1,4,5,8],"static":1,"switch":1,"true":[0,1],"while":8,For:8,One:8,Ops:7,The:[0,8],These:[0,5],Use:[1,5],__init__:8,accent:1,accuraci:6,action:1,add:1,add_featur:1,add_words_to_inst:0,adding:8,addit:8,adversari:[1,3,4,5,7],adversarial_param:8,after:8,aggress:4,algorithm:[0,5,7,8],all:8,all_malici:0,allow:[0,8],also:8,analyz:1,ani:[0,8],append:8,area:6,arg:[0,1],argument:8,argv:2,around:5,arrai:[0,4],assign:8,assumpt:4,asymmetr:4,attack:[0,4,8],avail:[0,1,5],bare:[0,4,8],base:[0,1,4,5,6,8],base_model:4,base_path:1,basemodel:5,basic:1,battl:1,battle_nam:1,befor:8,below:8,best_n:0,best_n_word:0,between:[0,8],bia:[4,8],binari:7,binary_greedi:0,binarygreedi:0,buffer:8,build_word_set:0,built:0,bulk:8,c_delta:[4,8],c_f:4,call:8,camouflag:8,can:[1,4,8],categori:1,chang:[0,1,4,8],change_inst:0,classif:[1,4,5,8],classifi:[0,5,6],clf:6,clone:0,code:8,comment:8,comput:[0,4],conjunct:5,consid:0,constraint:8,constructor:8,contain:[1,8],convex:4,coordinate_greedi:0,copi:[0,1],corpu:1,correspond:[0,8],cost:7,cost_sensit:0,cost_vector:1,costsensit:0,cover:8,creat:0,create_corpu:1,create_inst:1,createdata:1,creation:1,csr:1,csr_matrix:1,current:[0,1,5,6],curv:6,data:[0,7],data_read:[0,1,4,5,6],dataset:1,decis:5,decision_funct:[4,8],decision_function_adversari:5,declar:0,deepcopi:8,def:8,defin:[0,1,4,5,8],degre:1,delet:7,delta_ua:0,demo3:7,demo:2,deriv:0,describ:4,determin:[0,5],dgree:1,dict:[0,4,5,8],dictionari:[0,5,8],differ:0,distanc:8,doe:8,driver:2,dual:4,each:[0,1,5,8],effect:0,els:8,email:1,epsilon:0,equival:8,esqu:8,etc:8,evalu:6,evasionmetr:6,everi:8,exactli:0,exampl:8,execut:1,exist:[0,1],exp:8,explan:8,extend:[1,3,5],extract:1,extractor:1,fals:0,fdrop:4,featur:[1,7,8],feature_count:1,feature_delet:[0,4],feature_differ:[0,1],feature_indic:1,feature_vector:1,featuredelet:[0,4],featurevector:[0,1],file:1,fill:0,find:8,find_fil:1,find_mcc:0,find_wit:0,first_n:0,first_n_word:0,fit:1,flip:1,flip_bit:[1,8],fold:1,folder:1,follow:[0,8],fool:0,format:1,formula:4,found:1,free:7,free_rang:0,freedom:1,freerang:[0,7],frequenc:1,frequent:8,from:[0,1,8],futur:[1,5],fv1:1,fv2:1,fv_equal:1,gain:0,game:3,gap:0,gener:[1,5],get:[0,5],get_alg:5,get_available_param:[0,4,5,8],get_csr_matrix:1,get_featur:1,get_feature_cost:1,get_feature_count:[1,8],get_feature_vector:[1,8],get_feature_vector_cost:1,get_label:[1,8],get_n_word:0,getaccuraci:6,getprecis:6,getrecal:6,getroc_auc:6,getter:8,give:0,given:[0,1],globerson:4,goal_vector:1,good:7,good_word:0,goodword:0,greedi:7,ham:1,helper:8,here:8,how:8,implement:[0,1,8],improv:5,includ:[1,5,8],index:[1,3],index_path:1,indic:0,indices_to_check:0,individu:8,inform:0,inherit:8,initi:[0,4,5,8],initialpredictor:0,input:[0,1,4,5,6],instanc:[0,1,4,5,6,8],intended_classif:0,interfac:8,is_valid_attack_model_typ:0,ispreattack:6,job:0,just:8,kei:8,knowledg:0,known:1,label:[1,5,8],lambda:8,lambda_v:[0,8],largest:4,learn:[3,4,8],learn_model:8,learner:[0,1,3,6,7],legit_messag:0,length:1,less:0,librari:[2,3,5],linear:4,list:[0,1,4,5,6,8],load:7,load_inst:1,loc:0,locat:1,log:0,log_odd:0,log_threshold:0,loop:8,machin:3,made:0,main:2,manipul:[1,8],map:[0,1,5],matric:4,matrix:[1,8],max:1,max_chang:[0,8],max_df:1,max_df_:1,max_featur:1,max_features_:1,maxim:8,maximim:1,mean:4,messag:0,method:[0,1,4,8],metric:7,min:1,min_df:1,min_df_:1,minimize_transform:0,minimum:[0,4,8],model:[0,1,4,8],model_typ:0,modifi:8,modul:[1,3,7],more:1,most:4,move:8,must:[0,5,8],name:[0,1,5],necessari:5,need:0,neg:0,new_prob:8,ngram_rang:1,ngram_range_:1,none:[0,1,4,5,8],note:[3,4,8],num_delet:0,num_featur:[1,4,8],num_inst:1,number:[0,1,8],object:[0,1,5,6],occur:8,odd:0,one:[1,8],onli:[0,8],open_battl:1,open_predict:1,oper:[1,5],opitim:4,opposit:1,optim:[4,7,8],option:8,order:5,orig_prob:8,origin:0,other:8,output:1,over:8,packag:3,page:3,pair:0,paper:4,param:[0,4,5,8],paramet:[0,1,4,5,8],parametr:8,pass:8,path:1,perform:[2,6,8],phrase:1,plotroc:6,posit:0,possibl:0,post:6,pre:6,precis:6,predict:[0,1,4,5,8],predict_and_record:0,predict_inst:4,predict_proba:[4,5,8],predict_proba_adversari:5,prefer:8,primari:8,probabl:[5,8],problem:4,provid:8,pull:1,python:3,quadratic_cost:0,quantifi:8,rais:8,rang:[1,7,8],rather:8,raw:1,reach:0,real:4,recal:6,recommend:8,recurs:0,refer:3,reli:8,remov:1,remove_featur:1,repres:1,represent:1,requir:8,restrain:7,result:[1,5],retrain:7,retriev:8,robustlearn:[4,6,8],roc:6,rowei:4,same:0,save:1,save_battl:1,save_data:1,save_predict:1,save_transformed_inst:1,scipi:1,search:3,section:8,see:8,self:[4,8],sensit:7,serial:7,set:[0,1,5,8],set_adversarial_param:[0,8],set_label:1,set_model:[4,8],set_param:[0,4,5,8],set_training_inst:8,setup:7,shape:4,should:8,similar:8,simpl:[7,8],simple_learn:4,simple_optim:0,simplelearn:[4,8],simpleoptim:[0,8],simpli:8,sinc:8,singl:[4,8],sklearn:[1,5,8],sklearn_object:5,sklearner:8,smallest:4,solv:4,sourc:[0,1,2,4,5,6],space:8,spam:1,spam_messag:0,spars:1,sparsifi:1,specif:[0,8],specifi:[0,1,8],standard:0,state:1,step_siz:0,storag:7,str:1,strategi:[4,7,8],string:1,strip_acc:1,strip_accents_:1,structur:1,subclass:8,subfold:1,subsect:1,suppli:5,support:6,svm:7,svm_freerang:4,svm_restrain:4,svmfreerang:4,svmrestrain:[4,8],take:[4,8],taken:1,term:1,test:[1,5],tf_idf:1,tfidf_matrix:1,than:[0,8],thei:8,them:8,theoret:3,thi:[0,8],those:8,threshold:0,through:1,time:1,todo:1,tradeoff:8,train:[0,1,4,5,8],train_inst:[0,8],training_inst:[4,8],transform:[0,1],transform_cost:0,transformed_inst:8,trec05:1,trec05p:1,tupl:1,type:[0,1,4,5,6,8],typic:8,under:6,underli:[1,5],updat:[0,1,5],usag:5,use:[0,5,8],used:[0,1,4,5,8],user:[0,1,5,8],uses:8,using:[0,4,5,8],util:[0,7,8],val:1,valu:[0,1,4,5,8],valueerror:8,variabl:[1,8],vector:[1,4,8],wai:[1,8],weight:[4,8],were:8,what:0,which:8,within:[1,8],word:7,word_indic:0,wrap:8,wrapper:[5,8],xj_max:0,xj_min:0,xmax:4,xmin:4,you:8,your:8},titles:["adversaries","data","demo3 module","AdLib documentation","learners","learners.models package","metrics module","adlib","Extending AdLib","setup module"],titleterms:{Adding:8,Ops:1,adlib:[3,7,8],adversari:[0,8],algorithm:4,aml:8,binari:0,content:5,cost:0,data:1,delet:[0,4],demo3:2,document:3,extend:8,featur:[0,4],free:0,freerang:4,good:0,greedi:0,indic:3,learner:[4,5,8],load:1,metric:6,model:5,modul:[2,5,6,9],optim:0,packag:5,rang:0,restrain:4,retrain:4,sensit:0,serial:1,setup:9,simpl:[0,4],sklearner:5,storag:1,strategi:0,submodul:5,svm:4,tabl:3,util:1,word:0}})