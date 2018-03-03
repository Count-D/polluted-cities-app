import React from 'react';

class MoreInfo extends React.Component {
    
    componentDidMount(){
        //Always render on top of the page
        window.scrollTo(0, 0)
    }

    render(){
    return (
    <div className="slt container">
        
        <img src="https://i.imgur.com/D1VoQT2.jpg"/>
        <h1>Possible Solutions</h1>
        <h2>#1- Technological Shift to Cleaner Technologies</h2>
        <p>We know that our dependency on fossil fuel for energy generation is one of the major causes of air pollution. So the only way to prevent this is to make a shift to less polluting cleaner energy sources like wind, solar, geothermal and renewable fuels. Promoting electric cars or one with fuel cells rather than gasoline engine will also curb pollution down.  But creating and promoting a functional and effective public transportation system country-wide is the best way to reduce huge air pollution from millions of privately owned vehicles. </p>

        <h2>#2 - Pollution Prevention and Treatment</h2>
        <p>Air pollution can be prevented by treating the point source emissions (polluted air emissions from factories, industries etc.) with appropriate treatment technologies. Some of the air pollutants and their appropriate treatment technologies are as follows:

            Particulate Matter (PM in the emission can be controlled by using mechanical collection devices like electrostatic precipitator, dust cyclones, multi-cyclones, baffle, bag houses and particulate scrubber.

            Nitrogen dioxide emission can be controlled with the help of low-NOx burners and scrubbers, selective catalytic and non-catalytic reduction, exhaust gas recirculation and catalytic converters.

            Sulfur dioxide can be controlled by using wet and dry scrubbers and flue gas desulfurization techniques.

            Volatile Organic Carbon (VOC) in the emission can be abated by using adsorption technology, catalytic converter, scrubber and absorption technologies, biofilters and activated carbon technologies.

            Also capturing the pollutants at the source and continuous emission monitoring and modeling are other ways to prevent pollution emission.</p>

        <h2>#3 - Laws and Regulations at National level</h2>
        <p>Laws and regulation always plays an important part to control pollution. That is why Government of different countries should adopt  air pollution control laws and regulatory efforts to identify and categorized different air pollutants; stationary and mobile sources that contribute to air pollution; setting acceptable and implementable limits on pollution discharge as well as improving mitigation measures and treatment technologies. Government entities should not only propose guidelines and emission standards but also strictly regulate it by introducing penalties, fines and imprisonment to the polluters.

        Governments can also introduce ‘carbon credit program’, trading ‘pollution allowance’ and other economical tools that encourage various parties to reduce carbon emission to the environment by adopting renewable energy sources and reducing fuel usage.

        Different developed countries have already implemented their own Clean Air Act to limit pollutant discharge to the atmosphere over the years.

        The main law regulating air quality in the United States is the US clean Air Act that was amended over the period (1955-1990) to regulate emissions of hazardous air pollutants and to protect public health. It is a federal law that regulates air emissions from stationary and mobile sources and authorizes Environmental Protection Agency (EPA) to establish National Ambient Air Quality Standards (NAAQS). EPA also has the authority to set emission standards for new and existing air pollution sources like power plants, factories etc. to regulated their emission.

        In the year 1952, due to smog lots of people died in London. As a response, British Government introduced their Clean Air Act in 1956.       

        In Canada, The Clean Air Regulatory Agenda (CARA) was established in 2006 to support Government of Canada‘s effort to reduce greenhouse gas (GHG) and air pollutant emissions. Also government organizations like Environment Canada and Health Canada are currently working with different provinces, industry and non-governmental organizations to implement a new air quality management system nationwide.</p>

        <h2>#4 - Discharge Reduction Agreement at International Level</h2>
        <p>As we know that air pollution cannot be confined in local or national level, as it spreads its effect to global scale and can produce long term impact on earth’s climate. That is why it is so important for different countries to come forward as a team in emission reduction efforts and agreement. This movement had actually started at the Rio Earth Summit in 1992, where various countries come together and set a framework for action aimed at stabilizing atmospheric concentrations of greenhouse gases (GHGs, which are responsible for global warming). The UN Framework on Climate Change (UNFCCC) entered into force on 21 March 1994, now has a near-universal membership of 195 parties.

            The 2015 UN climate change conference in Paris, 195 developed and developing nations came together to agree on the new climate deal that included the goal of keeping global temperature increase “well below” two degrees Celsius. Out of 195 countries, 185 have announced measures to limit or reduce their greenhouse gas emissions by 2025 or 2030. But even if these commitments are fulfilled, temperatures would still be set to rise by around 3°C. (Data source: http://www.cop21.gouv.fr/en/what-was-cop21/). But many countries, including some island states that are threatened by rising sea levels, consider themselves in danger beyond 1.5°C global temperature rise.  So in order to achieve this objective, considerable efforts and commitments are required by the major air polluting countries. </p>

        <h2>#5 - Creating Awareness and Changing Habits</h2>
        <p>Human activities are one of the major contributors to air pollution worldwide. If we make better choices in terms of technologies and products and chose the less polluting ones, we can curb down the pollution. Following are some of the actions we can take at personal level to reduce air pollution:</p>
        <ul>
            <li>Transportation sector is one of the major contributors to air pollution and the huge number of personal vehicle we own and use daily, is causing this. If we can walk, bike and carpool whenever possible, that will definitely reduce vehicle related air pollution. Also, we should turn car engines off when idling.</li>
            <li>We should try to consume use less energy to reduce our energy demand. We can do that by using energy efficient light bulbs, appliances etc.  Also we can conserve energy by turning of off lights and electronic devices when not in use.</li>
            <li>We should try to Use renewable energy sources like solar, wind and geothermal as much as possible to reduce fossil fuel consumption.</li>
            <li>We should reduce and reuse waste as much as possible to avoid them going to landfills and generating green house gases.</li>
            <li>We should plant more trees as they absorb carbon dioxide and purify the air. </li>
            <li>We should plant more trees as they absorb carbon dioxide and purify the air. </li>
            <li>We should stop smoking indoor and outdoor and at least make public places ‘no smoke’ zones. </li>
        </ul>
    </div>
    );
}
}
export default MoreInfo