
module.exports.variables = {
  cost_self_pay: { description: 'Self pay charges', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#bde6bc', '#61b85f' ]},
  cost_medicare: { description: 'Medicare charges', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#bde6bc', '#61b85f' ] },
  cost_medical: { description: 'Medi-Cal charges', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#bde6bc', '#61b85f' ] },
  net_income_margin: { description: 'Net income margin', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#c7d7e3', '#7b97ac' ] },
  occupency_rate: { description: 'Occupency rate', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#c7d7e3', '#7b97ac' ] },
  num_beds: { description: 'Number of beds', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#c7d7e3', '#7b97ac' ] },
  age: { description: 'Resident age', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#c7d7e3', '#7b97ac' ] },
  fed_penalty: { description: 'Federal penalty', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#f8c79f', '#eb7a1f' ] },
  state_penalty: { description: 'State penalty', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#f8c79f', '#eb7a1f' ] },
  complaints_deficiencies: { description: 'Compalints and deficiencies', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#f8c79f', '#eb7a1f' ] },
  staff_wages: { description: 'Staff wages', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#8fcdde', '#209aba' ] },
  staff_treatment: { description: 'Staff rating', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#8fcdde', '#209aba' ] },
  overall_rating: { description: 'CalQualityCare Overall rating', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#8fcdde', '#209aba' ] },
  quality: { description: 'CalQualityCare Quality of care rating', type: 'heatmap', colors: [ 'rgba(0,0,0,0)', '#8fcdde', '#209aba' ] }
};