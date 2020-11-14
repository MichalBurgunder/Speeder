const ss = require('simple-statistics')

// const { removeAnomalies } = require('./anomaly-detection')

function analyzeData(rawData, options) {
  // const newRawData = options.anomalyDetection
  //   ? removeAnomalies(rawData)
  //   : rawData

  const finalAnalysis = {
    min: [],
    max: [],
    mean: [],
    median: [],
    variance: [],
    std: [],
    dataPoints: rawData.length,
    // rawData: rawData,
  }

  finalAnalysis.min.push(ss.min(rawData))
  finalAnalysis.max.push(ss.max(rawData))
  finalAnalysis.mean.push(ss.mean(rawData))
  finalAnalysis.median.push(ss.median(rawData))
  finalAnalysis.variance.push(ss.variance(rawData))
  finalAnalysis.std.push(ss.standardDeviation(rawData))

  return finalAnalysis
}

module.exports = { analyzeData }
