/**
 * 
 */
package com.cg.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.bean.TrainingProgram;
import com.cg.dao.TrainingProgramRepository;

/**
 * @author Uma Shankar
 *
 * 04-May-2020 3:07:02 pm
 */
@Service
public class TrainingProgramMaintainanceImpl implements TrainingProgramMaintainance {
	
	
	@Autowired
	TrainingProgramRepository trainingProgramDao ;

	@Override
	public List<TrainingProgram> getAllTrainingProgram() {
		return this.trainingProgramDao.findAll();
	}

	@Override
	public TrainingProgram getTrainingProgramById(Integer trainingCode) {
		return this.trainingProgramDao.findById(trainingCode).get();
		
	}

	@Override
	public TrainingProgram addTrainingProgram(TrainingProgram trainingProgram) {
		return this.trainingProgramDao.save(trainingProgram);
		
	}

	@Override
	public Boolean deleteTrainingProgram(Integer trainingCode) {
		this.trainingProgramDao.deleteById(trainingCode);
		return true;
	}

	@Override
	public boolean isTrainingProgram(Integer trainingCode) {
		List<TrainingProgram> trainingProgramList = this.trainingProgramDao.findAll();
		for(int i=0;i<=trainingProgramList.size();i++) {
			if(trainingProgramList.get(i).getTrainingCode()==trainingCode)
				return true;
		}
		return false;
	}
	
	
	

	
}
