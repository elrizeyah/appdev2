// // // //FLEX

// // // import {StyleSheet, View} from 'react-native';

// // // const Flex = () => {
// // //   return (
// // //     <View
// // //       style={[
// // //         styles.container,
// // //         {
// // //           // Try setting `flexDirection` to `"row"`.
// // //           flexDirection: 'column',
// // //         },
// // //       ]}>
// // //       <View style={{flex: 1, backgroundColor: 'red'}} />
// // //       <View style={{flex: 2, backgroundColor: 'darkorange'}} />
// // //       <View style={{flex: 3, backgroundColor: 'green'}} />
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 20,
// // //   },
// // // });

// // // export default Flex;


// // //FLEX DIRECTION

// // import { useState } from 'react';
// // import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// // const FlexDirectionBasics = () => {
// //   const [flexDirection, setflexDirection] = useState('column');

// //   return (
// //     <PreviewLayout
// //       label="flexDirection"
// //       values={['column', 'row', 'column-reverse', 'row-reverse']}
// //       selectedValue={flexDirection}
// //       setSelectedValue={setflexDirection}>
// //       <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
// //       <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
// //       <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
// //     </PreviewLayout>
// //   );
// // };

// // const PreviewLayout = ({
// //   label,
// //   children,
// //   values,
// //   selectedValue,
// //   setSelectedValue,
// // }) => (
// //   <View style={{padding: 10, flex: 1}}>
// //     <Text style={styles.label}>{label}</Text>
// //     <View style={styles.row}>
// //       {values.map(value => (
// //         <TouchableOpacity
// //           key={value}
// //           onPress={() => setSelectedValue(value)}
// //           style={[styles.button, selectedValue === value && styles.selected]}>
// //           <Text
// //             style={[
// //               styles.buttonLabel,
// //               selectedValue === value && styles.selectedLabel,
// //             ]}>
// //             {value}
// //           </Text>
// //         </TouchableOpacity>
// //       ))}
// //     </View>
// //     <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
// //   </View>
// // );

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     marginTop: 8,
// //     backgroundColor: 'aliceblue',
// //   },
// //   box: {
// //     width: 50,
// //     height: 50,
// //   },
// //   row: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //   },
// //   button: {
// //     paddingHorizontal: 8,
// //     paddingVertical: 6,
// //     borderRadius: 4,
// //     backgroundColor: 'oldlace',
// //     alignSelf: 'flex-start',
// //     marginHorizontal: '1%',
// //     marginBottom: 6,
// //     minWidth: '48%',
// //     textAlign: 'center',
// //   },
// //   selected: {
// //     backgroundColor: 'coral',
// //     borderWidth: 0,
// //   },
// //   buttonLabel: {
// //     fontSize: 12,
// //     fontWeight: '500',
// //     color: 'coral',
// //   },
// //   selectedLabel: {
// //     color: 'white',
// //   },
// //   label: {
// //     textAlign: 'center',
// //     marginBottom: 10,
// //     fontSize: 24,
// //   },
// // });

// // export default FlexDirectionBasics;


// //LAYOUT DIRECTION

// import { useState } from 'react';
// import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

// const DirectionLayout = () => {
//   const [direction, setDirection] = useState('ltr');

//   return (
//     <PreviewLayout
//       label="direction"
//       selectedValue={direction}
//       values={['ltr', 'rtl']}
//       setSelectedValue={setDirection}>
//       <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
//     </PreviewLayout>
//   );
// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{padding: 10, flex: 1}}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map(value => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[styles.button, selectedValue === value && styles.selected]}>
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}>
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: 'aliceblue',
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: 'oldlace',
//     alignSelf: 'flex-start',
//     marginHorizontal: '1%',
//     marginBottom: 6,
//     minWidth: '48%',
//     textAlign: 'center',
//   },
//   selected: {
//     backgroundColor: 'coral',
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'coral',
//   },
//   selectedLabel: {
//     color: 'white',
//   },
//   label: {
//     textAlign: 'center',
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default DirectionLayout;


//JUSTIFY CONTENT

import { useState } from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');

  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ]}
      setSelectedValue={setJustifyContent}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default JustifyContentBasics;
