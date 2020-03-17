import React, { Component } from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  sectionHeading: {
    color: "#116679",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  controlContent: {
    margin: 10,
    marginBottom: 0,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#F6F6F6",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  controlPara: {
    fontSize: 14,
    lineHeight: 1.2,
    color: "#ACACAA",
    padding: 8,
    paddingLeft: 0,
    marginLeft: 10,
  },
  controlDetail: {
    backgroundColor: "#F6F6F6",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    flexDirection: "column",
    padding: 10,
    alignItems: "flex-start",
  },
  controlDetailPara: {
    marginBottom: 15,
    fontSize: 12,
    color: "#ACACAA ",
  },
  controlDetailRef: {
    fontWeight: "bold",
    color: "#4a4a4a",
    fontSize: 10,
  },
  fontBold: {
    fontWeight: "bold",
  },
  brandImage: {
    width: 150,
    marginLeft: 30,
    marginTop: 20,
  },
  brand: {
    fontSize: 23,
    color: "#116679",
    marginLeft: 30,
    marginTop: 8,
    fontWeight: "bold",
  },
  poweredby: {
    fontSize: 10,
    color: "#116679",
    marginLeft: 30,
    marginTop: 0,
    marginBottom: 20,
  },
})

export default class controlPdf extends Component {
  renderControls() {
    const { seed, seriesa, crossed, checked } = this.props.data
    if (seed.length > 0 || seriesa.length > 0) {
      var data = []
      const { seedcontrol, seriesacontrol } = this.props.data
      if (seedcontrol) data = [...seed]
      if (seriesacontrol) data = [...data, ...seriesa]

      const sections = [...new Set(data.map(x => x.safeguardsConsiderations))]

      let controlsdata = []
      sections.map((sec, secindex) => {
        var secitems = data.filter(item => item.safeguardsConsiderations == sec)

        secitems = secitems.filter(item => {
          var condition = false
          var cond1,
            cond2,
            cond3 = false

          const { corporate, product, productInfrastructure } = this.props.data
          if (corporate)
            if ("undefined" === typeof item["corporate"]) cond1 = false
            else cond1 = true
          if (product)
            if ("undefined" === typeof item["product"]) cond2 = false
            else cond2 = true

          if (productInfrastructure)
            if ("undefined" === typeof item["productInfrastructure"])
              cond3 = false
            else cond3 = true

          if (cond1 || cond2 || cond3) condition = true
          else condition = false
          return condition
        })

        const itemhtml = secitems.map((item, index) => {
          if (!crossed.includes(item.id))
            if (checked.includes(item.id))
              return (
                <View key={index} style={styles.controlContent} wrap={false}>
                  <Text style={(styles.controlPara, styles.fontBold)}>
                    {item.controls}
                  </Text>
                  <View key={index + 1000} style={styles.controlDetail}>
                    <Text style={(styles.controlDetailPara, styles.fontBold)}>
                      {item.details}
                    </Text>
                    {item.suggestedTools ? (
                      <Text style={styles.controlDetailRef}>
                        Suggested Tools: {item.suggestedTools}{" "}
                      </Text>
                    ) : null}
                    {item.reference ? (
                      <Text style={styles.controlDetailRef}>
                        Reference: {item.reference}
                      </Text>
                    ) : null}
                  </View>
                </View>
              )
            else
              return (
                <View key={index} style={styles.controlContent} wrap={false}>
                  <Text style={styles.controlPara}>{item.controls}</Text>

                  <View key={index + 1000} style={styles.controlDetail}>
                    <Text style={styles.controlDetailPara}>{item.details}</Text>
                    {item.suggestedTools ? (
                      <Text style={styles.controlDetailRef}>
                        Suggested Tools: {item.suggestedTools}{" "}
                      </Text>
                    ) : null}
                    {item.reference ? (
                      <Text style={styles.controlDetailRef}>
                        Reference: {item.reference}
                      </Text>
                    ) : null}
                  </View>
                </View>
              )
        })

        const secitem =
          secindex === 0 ? (
            <View>
              <Text style={styles.sectionHeading}>{sec}</Text>
            </View>
          ) : (
            <View break>
              <Text style={styles.sectionHeading}>{sec}</Text>
            </View>
          )

        let sectemparray = [secitem]
        sectemparray = [...sectemparray, ...itemhtml]
        controlsdata.push(sectemparray)
      })

      return controlsdata
    }
  }

  render() {
    console.log(this.props)
    return (
      <Document>
        <Page size="A4" style={styles.page} wrap>
          <Image style={styles.brandImage} src="/img/logo.png" />
          <Text style={styles.brand}>Security4Startups</Text>
          <Text style={styles.poweredby}>
            POWERED BY <Text style={styles.fontBold}>GGV</Text>CAPITAL
          </Text>
          {this.renderControls()}
        </Page>
      </Document>
    )
  }
}
