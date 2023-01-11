import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps, withState, withHandlers } from 'recompose';
import { number, bool } from 'prop-types';
import { validateNumber } from 'utils';
import customPin from 'components/Svg/svg/icons/icn-marker-map.svg';
import styles from './styles';

const { googleApiKey } = ENV;

const Map = compose(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&v=3.exp&libraries=geometry,drawing,places`,
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <styles.ContainerMap />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withState(),
	withHandlers(() => {
		const refs = {
			map: undefined
		};

		return {
			onMapMounted: () => ref => {
				refs.map = ref;
			}
		};
	}),
	withGoogleMap
)(({ lat, lng, zoom, isMarkerShown, mobile, draggable, ...props }) => {
	if (!validateNumber(lat) || !validateNumber(lng)) return null;
	const offset = 0.003;

	const markerIcon = {
		url: `data:image/svg+xml,${customPin}`,
		anchor: new google.maps.Point(22, 46),
		scaledSize: new google.maps.Size(43, 43)
	};

	return (
		<GoogleMap
			center={mobile ? { lat, lng } : { lat, lng: lng - offset }}
			zoom={zoom}
			ref={props.onMapMounted}
			onZoomChanged={props.onZoomChanged}
		>
			{isMarkerShown && <Marker position={{ lat, lng }} icon={markerIcon} />}
			{props.storesMarkers &&
				props.storesMarkers.map((e, i) => (
					<Marker position={{ lat: e.lat, lng: e.lng }} icon={markerIcon} key={i.toString()} />
				))}
		</GoogleMap>
	);
});

Map.propTypes = {
	lat: number.isRequired,
	lng: number.isRequired,
	zoom: number,
	isMarkerShown: bool,
	draggable: bool,
	mobile: bool
};

Map.defaultProps = {
	zoom: 10,
	isMarkerShown: false,
	draggable: false,
	mobile: false
};

export default Map;
