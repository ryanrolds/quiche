
module.exports = {
  'legend': {
    'positions': {
      'bottom': 'b',
      'bottomVertical': 'bv', 
      'top': 't',
      'topVertical': 'tv',
      'right': 'r',
      'left': 'l'
    },
    'order': {
      'l': 'l', // Default vertical - order in chdl
      'r': 'r', // Reverse order of chdl
      'a': 'a', // Default horizonal - shortest first
      'c': 'c' // Custom 0,1,2,3.... indexs from chdl
    }
  },
  'align': {
    'centered': 'c',
    'left': 'c',
    'right': 'r'
  },
  'charts': {
    'bar': 'setChartBar',
    //'candlestick': 'setChartCandlestick',
    //'gom': 'setChartGom',
    //'line': 'setChartLine',
    //'map': 'setChartMap',
    'pie': 'setChartPie',
    //'radar': 'setChartRadar',
    //'scatter': 'setChartScatter',
    //'venn': 'setChartVenn'
  },
  'paramaters': {
    // bar width & spacing
    'chbh': ['bar'], 
    // series colors
    'chco': ['bar', 'gom', 'line', 'map', 'pie', 'radar', 'scatter', 'veen'], 
    // chart data string
    'chd': ['bar', 'candlestick', 'gom', 'line', 'map', 'pie', 'radar', 'scatter', 'veen'], 
    // legend text
    'chdl': ['bar', 'candlestick', 'gom', 'line', 'pie', 'radar', 'scatter', 'veen'], 
    // legend position
    'chdlp': ['bar', 'candlestick', 'gom', 'line', 'pie', 'radar', 'scatter', 'veen'], 
    // color size of legend
    'chdls': ['bar', 'candlestick', 'gom', 'line', 'pie', 'radar', 'scatter', 'veen'], 
    // scales for text format 
    'chds': ['bar', 'candlestick', 'gom', 'line', 'map', 'pie', 'radar', 'scatter', 'veen'], 
    // dynamic icon markers
    'chem': ['bar', 'candlestick', 'line', 'radar', 'scatter'], 
    // fills
    'chf': ['bar', 'candlestick', 'gom', 'line', 'map', 'pie', 'radar', 'scatter', 'veen'], 
    // data functions
    'chfd': ['bar', 'candlestick', 'gom', 'line', 'map', 'pie', 'radar', 'scatter', 'veen'], 
    // grid lines
    'chg': ['bar', 'candlestick', 'line', 'radar', 'scatter'], 
    // Pie chart label, google-ometter label
    'chl': ['gom', 'pie'], 
    // Chat label data
    'chld': [], 
    // Line styles
    'chls': ['line', 'radar'], 
    // Bunch of these
    'chm': ['bar', 'candlestick', 'line', 'radar', 'scatter'], 
    // Chart margins
    'chma': ['bar', 'candlestick', 'gom', 'line', 'map', 'pie', 'radar', 'scatter', 'venn'], 
    // Output format
    'chof': ['bar', 'candlestick', 'gom', 'line', 'map', 'pie', 'radar', 'scatter', 'veen'], 
    // Bar chart zero lies, pie chart orientation
    'chp': ['bar', 'pie'],
    // Chart size
    'chs': ['bar', 'candlestick', 'gom', 'line', 'map', 'pie', 'radar', 'scatter', 'veen'],
    // Dynamics Icon type 
    'chst': [], 
    // Chart type
    'cht': ['bar', 'candlestick', 'gom', 'line', 'map', 'pie', 'radar', 'scatter', 'veen'], 
    // Greographic area
    'chtm': ['map'], 
    // Chart title and style
    'chtt': ['bar', 'candlestick', 'gom', 'line', 'pie', 'radar', 'scatter', 'venn'], 
    // Chart title and style
    'chts': ['bar', 'candlestick', 'gom', 'line', 'pie', 'radar', 'scatter', 'venn'], 
    // Visible axes
    'chxt': ['bar', 'candlestick', 'gom', 'line', 'radar', 'scatter'], 
    // Axis ranges
    'chxr': ['bar', 'candlestick', 'gom', 'line', 'radar', 'scatter'], 
    // Axis labels
    'chxl': ['bar', 'candlestick', 'gom', 'line', 'radar', 'scatter'], 
    // Axis label positions
    'chxp': ['bar', 'candlestick', 'gom', 'line', 'radar', 'scatter'], 
    // Axis labels styles
    'chxs': ['bar', 'candlestick', 'gom', 'line', 'radar', 'scatter'], 
    // Axis tick mark styles
    'chxtc': ['bar', 'candlestick', 'line', 'radar', 'scatter'] 
  }
};